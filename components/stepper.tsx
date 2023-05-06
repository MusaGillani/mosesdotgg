const Stepper: React.FC = () => {
  return (
    <div className="py-2">
      <div
        className={`dark:bg-slate-border-slate-600 my-auto h-4 w-4 rounded-full border-2 border-gray-800 bg-gray-800 dark:border-slate-600 `}
      />
      <div className="dark:bg-slate-border-slate-600 mx-auto mt-5 h-4/5 w-1 rounded-full border border-gray-800 bg-gray-800 dark:border-slate-600" />
    </div>
  );
};

export default Stepper;
