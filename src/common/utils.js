import ImagePicker from 'react-native-image-crop-picker';

export function selectPhoto(callback = () => {
}, options = {}) {

  const defaultOptions = {
    cropping: false,
    mediaType: 'photo',
    compressImageQuality: 0.8,
    multiple: true,
    includeBase64: true,
  };
  let wrapOptions = Object.assign({}, defaultOptions, options);

  let success = false;
  let errorMsg = null;

  ImagePicker.openPicker(
    wrapOptions,
  ).then(response => {
    // console.log('onlyIMage image', images);
    success = true;
    callback({response, success, errorMsg});
  }).catch(error => {
    console.log(error);
    success = false;
    errorMsg = error;
  });

}

export function takePhoto(callback = () => {
}, options = {}) {
  const defaultOptions = {
    cropping: false,
    compressImageQuality: 0.8,
    includeBase64: true,
  };

  let wrapOptions = Object.assign({}, defaultOptions, options);

  let success = false;
  let errorMsg = null;

  ImagePicker.openCamera(
    wrapOptions,
  ).then(response => {
    // console.log('onlyIMage image', images);
    success = true;
    callback({response, success, errorMsg});
  }).catch(error => {
    console.log(error);
    success = false;
    errorMsg = error;
  });
}
