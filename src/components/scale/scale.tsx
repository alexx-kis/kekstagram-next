import './scale.scss';

// ^======================== Scale ========================^ //

type ScaleProps = {
  bemClass: string;
  onDecreaseButtonClick: () => void;
  onIncreaseButtonClick: () => void;
  imageSize: number;
};

function Scale(scaleProps: ScaleProps): React.JSX.Element {

  const { bemClass, onDecreaseButtonClick, onIncreaseButtonClick, imageSize } = scaleProps;

  return (
    <div className={`${bemClass} scale`}>
      <button
        type='button'
        className='scale__button _decrease'
        onClick={onDecreaseButtonClick}
      >
        -
      </button>
      <input type='text' className='scale__input' value={`${imageSize * 100}%`} readOnly/>
      <button
        type='button'
        className='scale__button _increase'
        onClick={onIncreaseButtonClick}
      >
        +
      </button>
    </div>
  );
}
export default Scale;