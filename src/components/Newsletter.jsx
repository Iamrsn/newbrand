function Newsletter() {
  return (
    <div>

      <p className="text-sm mb-2">Newsletter</p>

      <div className="flex">

        <input
          type="email"
          placeholder="Email Address"
          className="border px-3 py-2 w-full"
        />

        <button className="bg-black text-white px-4">
          →
        </button>

      </div>

    </div>
  );
}

export default Newsletter;