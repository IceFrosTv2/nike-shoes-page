  import './style.css';
  import spriteUrl from './icons/sprite.svg?url';

document.addEventListener ( 'DOMContentLoaded', () => {
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
    const decorativeSvg = [ 'logo', 'search' ];
    const informativeSvg = [ 'favorite', 'shoppingCart', 'menu', 'close' ];

    svg.setAttribute ( 'class', `${width} ${height} ${fill} cursor-pointer animation` );
    svg.setAttribute ( 'xmlns', "http://www.w3.org/2000/svg" );
    svg.setAttribute ( 'viewBox', viewBox );
    if ( decorativeSvg.includes ( iconName ) || svgID === 'favorite__button_svg' ) {
      svg.setAttribute ( 'aria-hidden', 'true' );
    } else if ( informativeSvg.includes ( iconName ) ) {
      svg.setAttribute ( 'role', 'button' );
      svg.setAttribute ( 'aria-label', iconName + ' icon' );
    }

    svgID === 'search' && svg.classList.add ( 'absolute', 'left-3', 'top-1' );
    svgID === 'favorite' && svg.classList.add ( 'active:fill-red-400', 'hover:md:fill-red-400' );
    svgID === 'menu' && svg.classList.add ( 'sm:hidden' );
    use.setAttribute ( 'href', `${spriteUrl}#${iconName}` );
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
    { iconName: 'favorite', svgID: 'favorite__button_svg' },
    { iconName: 'shoppingCart' },
    { iconName: 'menu' },
    { iconName: 'close' },
  ];

  icons.forEach ( iconConfig => {
    createSvgIcon ( iconConfig );
  } );

  const sizeContainer = document.getElementById ( 'choose-size' );
  const unavailableSizes = [ 33.5, 34, 34.5, 36.5, 37.5, 38.5, 39.5 ]
  for ( let i = 33; i <= 40; i += 0.5 ) {
    const button = document.createElement ( 'button' );
    button.className = 'size-block animation';
    button.type = 'button';
    button.textContent = `EU ${i}`;

    if ( unavailableSizes.includes ( i ) ) {
      button.disabled = true;
    }
    sizeContainer.appendChild ( button );
  }

  sizeContainer.addEventListener ( 'click', ( e ) => {
    if ( e.target.classList.contains ( 'size-block' ) ) {
      document.querySelector ( '.size-block.active-size' )?.classList.remove ( 'active-size' );
      e.target.classList.add ( 'active-size' );
    }
  } )

  const whiteBtn = document.getElementById ( 'white-color' );
  const blackBtn = document.getElementById ( 'black-color' );
  const images = document.querySelectorAll ( '.image-width' );

  function changeColor ( color ) {
//   Toggle class active color
    whiteBtn.classList.toggle ( 'active-color', color === 'white' );
    blackBtn.classList.toggle ( 'active-color', color === 'black' );

//   Change color shoes
    images.forEach ( ( img, index ) => {
      img.src = `./images/image_${color}_${index + 1}.png`;
    } );
  }

  whiteBtn.addEventListener ( 'click', () => changeColor ( 'white' ) );
  blackBtn.addEventListener ( 'click', () => changeColor ( 'black' ) );

  document.getElementById ( 'button__favorite' ).addEventListener ( 'click', () => {
    document.getElementById ( 'favorite__button_svg' ).classList.toggle ( 'fill-none' );
  } );

  const menu = document.getElementById ( 'menu' );
  const headerMenu = document.getElementById ( 'header__nav' );
  const headerBg = document.getElementById ( 'header__bg-mobile' );
  const closeButton = document.getElementById ( 'close' );

  [ menu, closeButton ].forEach ( element => {
    element.addEventListener ( 'click', () => {
      // headerMenu.classList.toggle ( 'hidden' );
      headerMenu.classList.toggle ( 'translate-x-full' );
      headerBg.classList.toggle ( 'hidden' );
    } );
  } );

} );
