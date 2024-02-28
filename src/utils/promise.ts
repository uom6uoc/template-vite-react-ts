// TODO: Deprecated -> use Promise.allsettled
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allResolved = async (promises: Promise<any>[]) => {
  const resolvedPromises = await Promise.all(
    promises.map((promise) =>
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      promise.catch((_error) => {
        return null;
      })
    )
  );

  return resolvedPromises.filter((promise) => promise !== null);
};

// const imageValidator = (url: string): Promise<string | undefined> => {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = () => resolve(url);
//     img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
//     img.src = url;
//   });
// };

const imageValidator = (
  url: string,
  onerror?: (error: string | Event) => void
): Promise<string | undefined> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, _reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = (error) => {
      onerror && onerror(error);
      resolve(undefined);
    };
    img.src = url;
  });
};

const loadImage = async ({
  path,
  extensions,
  onerror,
}: {
  path: string;
  extensions?: string[];
  onerror?: (error: string | Event) => void;
}): Promise<string | undefined> => {
  if (extensions === undefined || extensions.length === 0)
    return await imageValidator(path, onerror);

  const isWidthExtension = extensions.some((ext) => {
    const extIndex = path.lastIndexOf(ext);
    return extIndex !== -1 && extIndex === path.length - ext.length;
  });

  if (isWidthExtension) {
    return await imageValidator(path, onerror);
  }

  for (const ext of extensions) {
    const imageURL = await imageValidator(`${path}.${ext}`, onerror);
    if (imageURL) {
      return imageURL;
    }
  }

  return undefined;
};

export default { allResolved, loadImage };
