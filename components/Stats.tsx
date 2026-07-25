export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 text-center">

      <div>
        <h2 className="text-4xl font-bold">$5M+</h2>
        <p>Funding Pool</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">20K+</h2>
        <p>Wallets</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">100%</h2>
        <p>On-chain</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">0</h2>
        <p>KYC Required</p>
      </div>

    </section>
  );
}
