

import { useEffect, useState } from "react";

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.toString().replace(/\D/g, "")); // remove non-numeric chars
    const increment = end / (duration / 16); // 60fps approx

    function step() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

export default function Stats() {
  const doctors = useCounter(235);
  const tests = useCounter(420);
  const patients = useCounter(30000);
  const awards = useCounter(305);

  return (
    <section id="services" className="bg-blue-900  w-full text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold">{doctors}+</p>
          <p>Doctors</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{tests}+</p>
          <p>Medical Tests</p>
        </div>
        <div>
          <p className="text-3xl font-bold">
            {patients.toLocaleString()}+
          </p>
          <p>Patients Helped</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{awards}+</p>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  );
}
