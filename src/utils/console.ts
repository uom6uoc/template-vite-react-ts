interface ConsoleOptions {
  name: string;
  version: string;
  mode: string;
  style?: {
    color?: string;
    size?: string;
  };
}

const initConsole = ({ name, version, mode, style = {} }: ConsoleOptions) => {
  const color = style.color ?? 'wheat';
  const size = style.size ?? '18px';

  console.info(
    `%c${name.toUpperCase()} - v${version}`,
    `color:${color} ; font-size: ${size};`,
    `[${mode}]`
  );

  if (mode === 'prod' || mode === 'production') {
    console.log = () => undefined;
    console.warn = () => undefined;
    console.error = () => undefined;
  }
};

export default initConsole;
