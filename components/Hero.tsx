export default function Hero() {
  return (
    <section className="py-40 text-center">

      <h1 className="text-6xl font-black">
        The Prop Firm for
        <span className="text-green-400"> Solana Memes</span>
      </h1>

      <p className="mt-8 text-gray-400 text-xl max-w-2xl mx-auto">
        Pass the evaluation, get funded, and withdraw in SOL.
        No KYC. Your wallet is your identity.
      </p>

      <div className="mt-10 flex justify-center gap-5">

        <button className="bg-green-400 text-black px-8 py-4 rounded-xl font-bold">
          Start Evaluation
        </button>

        <button className="border border-green-400 px-8 py-4 rounded-xl">
          Learn More
        </button>

      </div>

    </section>
  );
}
