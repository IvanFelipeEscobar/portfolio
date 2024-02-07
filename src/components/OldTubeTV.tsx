interface OldTubeTVProps {
  render: () => JSX.Element;
}
const OldTubeTV: React.FC<OldTubeTVProps> = ({ render }) => {
  return (
    <div className="relative w-full max-w-[40rem] h-96 bg-black border-4 border-gray-800 rounded-lg overflow-hidden box-border mx-auto my-8">
      {/* TV Screen */}
      <div className="absolute inset-4 bg-gray-800 border-2 border-black overflow-auto">
        {render()}
      </div>

      {/* Knobs */}
      <div className="absolute -bottom-3 z-10 left-1/2 flex gap-6">
        <div className="w-6 h-6 bg-black border-2 border-gray-800 rounded-full mb-4">
          <section className="absolute -top-4 -left-3 text-xs">volume</section>
        </div>
        <div className="w-6 h-6 bg-black border-2 border-gray-800 rounded-full">
          <section className="absolute -top-4 left-10 text-xs">channel</section>
        </div>
        <div className="w-6 h-6 bg-black border-2 border-gray-800 rounded-full">
          <section className="absolute -top-4 left-24 text-xs">power</section>
        </div>
      </div>

      {/* Base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-[38rem] h-12 bg-gray-800 rounded-t-lg border-4 border-black"></div>
      </div>
    </div>
  );
};

export default OldTubeTV;
