import './scale.scss';

// ^======================== Scale ========================^ //

function Scale({ bemClass }: { bemClass: string; }): React.JSX.Element {
  return (
    <div className={`${bemClass} scale`}>
      <button type='button' className='scale__button _decrease'>
        -
      </button>
      <input type='text' className='scale__input' defaultValue={`${100}%`}/>
      <button type='button' className='scale__button _increase'>
        +
      </button>
    </div>
  );
}
export default Scale;