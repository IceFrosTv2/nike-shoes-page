import './style.css';

function createSvgIcon ( {
                           iconName,
                           svgID = iconName,
                           width = 'w-[18px]',
                           height = 'h-[18px]',
                           fill = 'fill-none',
                           viewBox = "0 0 18 18"
                         } ) {
  const svg = document.getElementById ( svgID );
  const use = document.createElementNS ( 'http://www.w3.org/2000/svg', 'use' );

  svg.setAttribute ( 'class', `${width} ${height} ${fill} cursor-pointer animation` );
  svg.setAttribute ( 'xmlns', "http://www.w3.org/2000/svg" );
  svg.setAttribute ( 'viewBox', viewBox );
  svg.setAttribute ( 'aria-label', iconName + ' icon' );

  svgID === 'search' ? svg.classList.add ( 'absolute', 'left-3', 'top-1' ) : null;
  svgID === 'favorite' ? svg.classList.add ('active:fill-red-400', 'hover:md:fill-red-400' ) : null;
  svgID === 'menu' ? svg.classList.add ('sm:hidden') : null;
  use.setAttribute ( 'href', `./src/icons/sprite.svg#${iconName}` );
  svg.appendChild ( use );

  return svg;
}

const icons = [
  {
    iconName: 'logo',
    width: 'w-15',
    height: 'h-[21px]',
    viewBox: "0 0 60 21"
  },
  { iconName: 'search' },
  { iconName: 'favorite' },
  { iconName: 'favorite', svgID: 'favorite__button' },
  { iconName: 'shoppingCart' },
  { iconName: 'menu' },
];

icons.forEach ( iconConfig => {
  createSvgIcon ( iconConfig );
} );

const sizeContainer = document.getElementById ( 'choose-size' );
const unavailableSizes = [ 33.5, 34, 34.5, 36.5, 37.5, 38.5, 39.5 ]
for ( let i = 33; i <= 40; i += 0.5 ) {
  const button = document.createElement ( 'button' );
  button.className = 'size-block';
  button.type = 'button';
  button.textContent = `EU ${i}`;

  if ( unavailableSizes.includes ( i ) ) {
    button.disabled = true;
  }
  sizeContainer.appendChild ( button );
}
