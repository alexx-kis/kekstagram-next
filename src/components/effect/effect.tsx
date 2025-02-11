import { FilterEffect } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getUploadingImageSrc } from '@/store/selectors';
import './effect.scss';

// ^======================== Effect ========================^ //

type EffectProps = {
  name: FilterEffect;
  effect: string;
  onEffectChange: (effect: string) => void;
};

function Effect(effectProps: EffectProps): React.JSX.Element {

  const { name, effect, onEffectChange } = effectProps;

  const uploadingImageSrc = useAppSelector(getUploadingImageSrc);

  const handleEffectSelect = () => {
    onEffectChange(name);
  };

  return (
    <li className={`effects__list-item effect _${name}`}>
      <label className='effect__label'>
        <input
          type='radio'
          name='effects'
          id={`effect-${name}`}
          className='effect__input'
          checked={effect === name}
          onChange={handleEffectSelect}
        />
        <div
          className='effect__thumbnail'
          style={{
            backgroundImage: `url(${uploadingImageSrc})`
          }}
        >
        </div>
        <span className='effect__name'>
          {name}
        </span>
      </label>
    </li>
  );
}
export default Effect;