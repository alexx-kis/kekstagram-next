import { FilterEffect } from '@/constants/const';
import { useAppSelector } from '@/hooks';
import { getUploadingImageSrc } from '@/store/selectors';
import './effect.scss';

// ^======================== Effect ========================^ //
type EffectProps = {
  name: FilterEffect;
};
function Effect(effectProps: EffectProps): React.JSX.Element {
  const { name } = effectProps;
  const uploadingImageSrc = useAppSelector(getUploadingImageSrc);

  return (
    <li className={`effects__list-item effect _${name}`}>
      <label className='effect__label'>
        <input type='radio' name='effects' id={`effect-${name}`} className='effect__input' />
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