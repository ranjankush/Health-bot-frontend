// // import { useState } from "react";
// // import axios from "axios";

// // export default function SymptomPage() {
// //   const [input, setInput] = useState("");
// //   const [botReply, setBotReply] = useState("");
// //   const [sessionId, setSessionId] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async () => {
// //     if (!input.trim()) return;
// //     setLoading(true);

// //     try {
// //       const params = { message: input };
// //       if (sessionId) params.sessionId = sessionId;

// //       const res = await axios.get("http://localhost:8081/chat", { params });
// //       const [session, botText] = res.data.split("\nBot: ");
// //       const sessionVal = session.replace("Session: ", "").trim();

// //       if (!sessionId) setSessionId(sessionVal);

// //       setBotReply(botText);
// //     } catch (err) {
// //       console.error(err);
// //       setBotReply("⚠️ Error contacting AI consultant.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-6">
// //       <h3 className="text-2xl font-semibold mb-4">Check Your Symptoms</h3>
// //       <div className="flex w-full max-w-lg gap-2">
// //         <input
// //           type="text"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           placeholder="Enter your symptoms..."
// //           className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
// //           onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
// //         />
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
// //         >
// //           OK
// //         </button>
// //       </div>

// //       {loading && <p className="mt-4 text-gray-500">Analyzing symptoms...</p>}
// //       {botReply && (
// //         <div className="mt-6 bg-white shadow p-4 rounded-lg max-w-lg text-gray-800">
// //           <h4 className="font-bold text-blue-700">AI Consultant says:</h4>
// //           <p className="mt-2">{botReply}</p>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }


// import { useState } from "react";
// import axios from "axios";

// export default function SymptomPage() {
//   const [input, setInput] = useState("");
//   const [botReply, setBotReply] = useState("");
//   const [sessionId, setSessionId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!input.trim()) return;
//     setLoading(true);

//     try {
//       const params = { message: input };
//       if (sessionId) params.sessionId = sessionId;

//       // Call Spring Boot backend
//       const res = await axios.get("http://localhost:8081/chat", { params });

//       // Parse backend response -> "Session: <uuid>\nBot: <reply>"
//       const [sessionLine, botLine] = res.data.split("\nBot: ");
//       const sessionVal = sessionLine.replace("Session: ", "").trim();

//       if (!sessionId) setSessionId(sessionVal);

//       setBotReply(botLine);
//     } catch (err) {
//       console.error(err);
//       setBotReply("⚠️ Error contacting AI consultant.");
//     } finally {
//       setLoading(false);
//       setInput(""); // clear input box
//     }
//   };

//   const handleReset = async () => {
//     if (!sessionId) return; // nothing to reset
//     try {
//       await axios.delete("http://localhost:8081/chat", {
//         params: { sessionId },
//       });
//       setSessionId(null);
//       setBotReply("");
//       setInput("");
//       alert("Conversation reset successfully ✅");
//     } catch (err) {
//       console.error(err);
//       alert("⚠️ Failed to reset conversation.");
//     }
//   };

//   return (
//     <section className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h3 className="text-2xl font-semibold mb-4">Check Your Symptoms</h3>

//       {/* Input */}
//       <div className="flex w-full max-w-lg gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter your symptoms..."
//           className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//           onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//         >
//           OK
//         </button>
//         {sessionId && (
//           <button
//             onClick={handleReset}
//             className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
//           >
//             Reset
//           </button>
//         )}
//       </div>

//       {/* Loading */}
//       {loading && <p className="mt-4 text-gray-500">Analyzing symptoms...</p>}

//       {/* Bot Reply */}
//       {botReply && (
//         <div className="mt-6 bg-white shadow p-4 rounded-lg max-w-lg text-gray-800">
//           <h4 className="font-bold text-blue-700">AI Consultant :</h4>
//           <p className="mt-2 whitespace-pre-line">{botReply}</p>
//           {sessionId && (
//             <p className="mt-2 text-xs text-gray-400">
//               Session ID: {sessionId}
//             </p>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }



import { useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function SymptomPage() {
  const [input, setInput] = useState("");
  const [botReply, setBotReply] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const params = { message: input };
      if (sessionId) params.sessionId = sessionId;

      // Call Spring Boot backend
      const res = await axios.get("http://localhost:8081/chat", { params });

      // Parse backend response -> "Session: <uuid>\nBot: <reply>"
      const [sessionLine, botLine] = res.data.split("\nBot: ");
      const sessionVal = sessionLine.replace("Session: ", "").trim();

      if (!sessionId) setSessionId(sessionVal);

      setBotReply(botLine);
    } catch (err) {
      console.error(err);
      setBotReply("⚠️ Error contacting AI consultant.");
    } finally {
      setLoading(false);
      setInput(""); // clear input box
    }
  };

  const handleReset = async () => {
    if (!sessionId) return; // nothing to reset
    try {
      await axios.delete("http://localhost:8081/chat", {
        params: { sessionId },
      });
      setSessionId(null);
      setBotReply("");
      setInput("");
      alert("Conversation reset successfully ✅");
    } catch (err) {
      console.error(err);
      alert("⚠️ Failed to reset conversation.");
    }
  };

  return (
    <section className="flex-1 flex flex-col  w-full items-center justify-center p-6">
      <h3 className="text-2xl font-semibold mb-4">Check Your Symptoms</h3>

      {/* Input */}
      <div className="flex w-full max-w-lg gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your symptoms..."
          className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          OK
        </button>
        {sessionId && (
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        )}
      </div>

      {/* Loading */}
      {loading && <p className="mt-4 text-gray-500">Analyzing symptoms...</p>}

      {/* AI Reply Box (always present with fixed height) */}
      <div className="mt-6 w-full max-w-4xl min-h-[140px]">
        {botReply ? (
          <div className="bg-[#f0f7ff] shadow p-4 rounded-xl text-gray-800">
            <h4 className="font-bold text-3xl text-blue-700 text-center">AI Consultant :</h4>
            <p className="mt-2 whitespace-pre-line">{botReply}</p>
            {sessionId && (
              <p className="mt-2 text-xs text-gray-400">
                Session ID: {sessionId}
              </p>
            )}
          </div>
        ) : (
          <div className="bg-gray-100 border border-dashed border-gray-300 p-4 rounded-lg text-center text-gray-400">
            AI response will appear here...
          </div>
        )}
      </div>


{/* about us */}

      {/* About Us Section */}
<div className="mt-16 w-full bg-[#f0f7ff] rounded-xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10 shadow-sm">

  {/* Left Content */}
  <div className="flex-1">
    <span className="inline-block bg-white text-blue-700 font-semibold px-4 py-1 rounded-full text-sm mb-4 shadow-sm">
      ABOUT US
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Track your health in context today
    </h2>
    <p className="text-gray-600 mb-6 leading-relaxed">
      Chatbot.health enables tracking your health in context. You'll get live and 
      historical data regarding your respiratory and cardiac functions, several 
      custom metrics and KPIs.
    </p>

    <ul className="space-y-4 text-gray-700">
      <li className="flex items-start">
        <span className="font-bold text-blue-900 mr-2">01.</span>
        Live parameters measured 20+
      </li>
      <li className="flex items-start">
        <span className="font-bold text-blue-900 mr-2">02.</span>
        Custom composed and executed diagnostic and therapeutic plans
      </li>
    </ul>

    <button className="mt-8 bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-md">
      KNOW MORE
    </button>
  </div>

  {/* Right Side - Overlapping Images */}
  <div className="flex-1 flex justify-center relative">
    {/* Background Image */}
    <img
      src="/patient.jpg"  // replace with your actual path
      alt="Robot assisting patient"
      className="rounded-2xl shadow-lg w-full max-w-md object-cover"
    />
    {/* Overlay Image */}
    <img
      src="/doctor.jpg"  // replace with your actual path
      alt="Doctor smiling"
      className="absolute -bottom-8 -left-8 rounded-2xl shadow-xl w-2/5 border-4 border-white"
    />
  </div>
</div>

{/* Blog / Symptom Info Cards Section */}
<div className="mt-20 w-full max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
    Learn More About Your Symptoms
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      title="Chest Pain & Discomfort"
      desc="Chest pain can be linked to heart, lungs, or even digestion issues. If persistent, consult a doctor immediately."
      image="/chest-pain.png"  // 🔹 add image path
    />
    <Card
      title="Shortness of Breath"
      desc="Breathing difficulties may indicate asthma, anxiety, or cardiovascular problems. Track frequency and severity."
      image="/breathe.jpg"
    />
    <Card
      title="Irregular Heartbeat"
      desc="Heart rhythm irregularities might be harmless but sometimes signal arrhythmia. Medical evaluation is recommended."
      image="/heart-2.jpg"
    />
  </div>
</div>

{/* Blog / Symptom Info Cards Section */}
<div className="mt-20 w-full max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
    Exercise Is The Key
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      title="The Importance of Regular Exercise for Heart Health"
      desc="Exercise is a powerful tool for supporting heart health, especially for those managing heart failure. Regular physical activity not only strengthens the heart but also improves energy levels, mood, and overall quality of life."
      image="/Exe.png"  // 🔹 add image path
    />
    <Card
      title="Exercise and Physical Activity for Heart Health"
      desc="Heart health is central to overall wellness, and staying physically active is one of the most effective ways to protect the heart. Regular exercise strengthens the cardiovascular system, enhances circulation, and lowers the risk of heart disease."
      image="/Heart.png"
    />
    <Card
      title="Implementing Robust Hallucination Control for Medical"
      desc="In the rapidly evolving world of generative AI, large language models (LLMs) hold incredible promise for revolutionizing healthcare. However, when it comes to medicine, even a minor “hallucination”—an output that appears plausible but is factually incorrect—can have significant consequences."
      image="/immune.png"
    />
  </div>
</div>
    </section>
  );
}
