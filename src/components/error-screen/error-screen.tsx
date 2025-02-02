import './error-screen.scss';

// ^======================== ErrorScreen ========================^ //

function ErrorScreen(): React.JSX.Element {
  return (
    <div className='error__wrapper'>
      <div className='error'>Error loading data</div>
      <p className='error__text'>Try again later</p>
    </div>
  );
}
export default ErrorScreen;