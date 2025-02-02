import './preloader.scss';

// ^======================== Preloader ========================^ //

function Preloader(): React.JSX.Element {
  return (
    <div className='preloader__wrapper'>
      <div className='preloader'>
        Loading...
      </div>
    </div>
  );
}
export default Preloader;