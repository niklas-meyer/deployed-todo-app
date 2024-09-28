
const ProgressBar = ({progress}) => {
    const colors = ['lightgreen', 'lightred', 'lightblue', ]
    return (
      <div className="outer-bar">
        <div className="inner-bar"
        style={{
            width: `${progress}%`, backgroundColor: colors[Math.floor(Math.random() * colors.length)]
        }}>


        </div>
      </div>
    );
  }
  
  export default ProgressBar;
  