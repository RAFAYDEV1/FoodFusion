export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none contain-paint">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-950/40 via-black to-black" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-600/20 blur-[100px] motion-safe:animate-[background-drift_18s_ease-in-out_infinite]" />
      <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/15 blur-[120px] motion-safe:animate-[background-drift-reverse_24s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 left-1/2 h-[600px] w-[600px] rounded-full bg-yellow-600/15 blur-[150px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};
