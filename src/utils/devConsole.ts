interface ConsoleOptions {
  name: string;
  version: string;
  mode: string;
  style?: {
    color?: string;
    size?: string;
  };
  env?: object;
}

const init = ({ name, version, mode, style = {}, env }: ConsoleOptions) => {
  const color = style.color ?? 'wheat';
  const size = style.size ?? '18px';
  const isProd = mode === 'prod' || mode === 'production';

  console.info(
    `%c${name.toUpperCase()} - v${version}`,
    `color:${color} ; font-size: ${size};`,
    `[${mode}]`,
    isProd ? undefined : { env }
  );

  if (isProd) {
    console.log = () => undefined;
    console.warn = () => undefined;
    console.error = () => undefined;
  }
};

const toggleDevMode = (mode = 'production'): void => {
  const isProd = mode === 'prod' || mode === 'production';

  if (sessionStorage.getItem('isDevMode')) {
    sessionStorage.removeItem('isDevMode');
    console.info('isDevMode: OFF');
    if (!isProd) alert('isDevMode: OFF');
  } else {
    sessionStorage.setItem('isDevMode', 'true');
    console.info('isDevMode: ON');
    if (!isProd) alert('isDevMode: ON');
  }
};

export default { init, toggleDevMode };
