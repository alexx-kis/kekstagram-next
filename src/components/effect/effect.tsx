import { FilterEffect } from '@/constants/const';
import './effect.scss';

// ^======================== Effect ========================^ //
type EffectProps = {
  name: FilterEffect;
};
function Effect(effectProps: EffectProps): React.JSX.Element {
  const { name } = effectProps;
  return (
    <li className='effects__list-item effect'>
      <label className='effect__label'>
        <input type='radio' name='effects' id={`effect-${name}`} className='effect__input' />
        <span className='effect__name'>
          {name}
        </span>
      </label>
    </li>
  );
}
export default Effect;