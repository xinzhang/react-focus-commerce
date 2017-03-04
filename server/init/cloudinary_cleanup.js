var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'xz-cloudinary',
  api_key: '112649942834417',
  api_secret: 'N2J8CoBfPlCrK4xfha85bvc-GFI'
});

// cloudinary.uploader.destroy('focuscommerce', function(result) {
//   console.log(result)
// });

cloudinary.api.delete_resources_by_prefix('focuscommerce', function(result){
  console.log(result);
})
