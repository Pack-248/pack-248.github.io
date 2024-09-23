import * as React from 'react';
import Layout from '../components/layout';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
//import lgFade from 'lightgallery/plugins/fade';

const GalleryPage = () => {

  const onInit = () => {
    //console.log('lightGallery has been initialized');
  };
  return (
    <Layout pageTitle="Gallery">
<div className='m-6'>
          <LightGallery
          className='m-6'
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              download={false}
              elementClassNames='flex flex-row flex-wrap space-x-4 space-y-4'
          >
              <a href='/images/gallery/gallery-00 (2).jpg'>
    <img alt='gallery-00 (2) thumbnail' src='/images/gallery/thumb/th_gallery-00 (2).jpg' />
</a>
<a href='/images/gallery/gallery-00.jpg'>
    <img alt='gallery-00 thumbnail' src='/images/gallery/thumb/th_gallery-00.jpg' />
</a>
<a href='/images/gallery/gallery-04.jpg'>
    <img alt='gallery-04 thumbnail' src='/images/gallery/thumb/th_gallery-04.jpg' />
</a>
<a href='/images/gallery/gallery-05 (2).jpg'>
    <img alt='gallery-05 (2) thumbnail' src='/images/gallery/thumb/th_gallery-05 (2).jpg' />
</a>
<a href='/images/gallery/gallery-05.jpg'>
    <img alt='gallery-05 thumbnail' src='/images/gallery/thumb/th_gallery-05.jpg' />
</a>
<a href='/images/gallery/gallery-06 (2).jpg'>
    <img alt='gallery-06 (2) thumbnail' src='/images/gallery/thumb/th_gallery-06 (2).jpg' />
</a>
<a href='/images/gallery/gallery-06.jpg'>
    <img alt='gallery-06 thumbnail' src='/images/gallery/thumb/th_gallery-06.jpg' />
</a>
<a href='/images/gallery/gallery-07.jpg'>
    <img alt='gallery-07 thumbnail' src='/images/gallery/thumb/th_gallery-07.jpg' />
</a>
<a href='/images/gallery/gallery-08.jpg'>
    <img alt='gallery-08 thumbnail' src='/images/gallery/thumb/th_gallery-08.jpg' />
</a>
<a href='/images/gallery/gallery-11.jpg'>
    <img alt='gallery-11 thumbnail' src='/images/gallery/thumb/th_gallery-11.jpg' />
</a>
<a href='/images/gallery/gallery-12.jpg'>
    <img alt='gallery-12 thumbnail' src='/images/gallery/thumb/th_gallery-12.jpg' />
</a>
<a href='/images/gallery/gallery-14.jpg'>
    <img alt='gallery-14 thumbnail' src='/images/gallery/thumb/th_gallery-14.jpg' />
</a>
<a href='/images/gallery/gallery-15.jpg'>
    <img alt='gallery-15 thumbnail' src='/images/gallery/thumb/th_gallery-15.jpg' />
</a>
<a href='/images/gallery/gallery-17.jpg'>
    <img alt='gallery-17 thumbnail' src='/images/gallery/thumb/th_gallery-17.jpg' />
</a>
<a href='/images/gallery/gallery-20.jpg'>
    <img alt='gallery-20 thumbnail' src='/images/gallery/thumb/th_gallery-20.jpg' />
</a>
<a href='/images/gallery/gallery-21 (2).jpg'>
    <img alt='gallery-21 (2) thumbnail' src='/images/gallery/thumb/th_gallery-21 (2).jpg' />
</a>
<a href='/images/gallery/gallery-21.jpg'>
    <img alt='gallery-21 thumbnail' src='/images/gallery/thumb/th_gallery-21.jpg' />
</a>
<a href='/images/gallery/gallery-26 (2).jpg'>
    <img alt='gallery-26 (2) thumbnail' src='/images/gallery/thumb/th_gallery-26 (2).jpg' />
</a>
<a href='/images/gallery/gallery-26.jpg'>
    <img alt='gallery-26 thumbnail' src='/images/gallery/thumb/th_gallery-26.jpg' />
</a>
<a href='/images/gallery/gallery-29.jpg'>
    <img alt='gallery-29 thumbnail' src='/images/gallery/thumb/th_gallery-29.jpg' />
</a>
<a href='/images/gallery/gallery-31.jpg'>
    <img alt='gallery-31 thumbnail' src='/images/gallery/thumb/th_gallery-31.jpg' />
</a>
<a href='/images/gallery/gallery-34.jpg'>
    <img alt='gallery-34 thumbnail' src='/images/gallery/thumb/th_gallery-34.jpg' />
</a>
<a href='/images/gallery/gallery-35.jpg'>
    <img alt='gallery-35 thumbnail' src='/images/gallery/thumb/th_gallery-35.jpg' />
</a>
<a href='/images/gallery/gallery-37.jpg'>
    <img alt='gallery-37 thumbnail' src='/images/gallery/thumb/th_gallery-37.jpg' />
</a>
<a href='/images/gallery/gallery-38.jpg'>
    <img alt='gallery-38 thumbnail' src='/images/gallery/thumb/th_gallery-38.jpg' />
</a>
<a href='/images/gallery/gallery-41 (2).jpg'>
    <img alt='gallery-41 (2) thumbnail' src='/images/gallery/thumb/th_gallery-41 (2).jpg' />
</a>
<a href='/images/gallery/gallery-41.jpg'>
    <img alt='gallery-41 thumbnail' src='/images/gallery/thumb/th_gallery-41.jpg' />
</a>
<a href='/images/gallery/gallery-44 (2).jpg'>
    <img alt='gallery-44 (2) thumbnail' src='/images/gallery/thumb/th_gallery-44 (2).jpg' />
</a>
<a href='/images/gallery/gallery-44.jpg'>
    <img alt='gallery-44 thumbnail' src='/images/gallery/thumb/th_gallery-44.jpg' />
</a>
<a href='/images/gallery/gallery-46.jpg'>
    <img alt='gallery-46 thumbnail' src='/images/gallery/thumb/th_gallery-46.jpg' />
</a>
<a href='/images/gallery/gallery-48.jpg'>
    <img alt='gallery-48 thumbnail' src='/images/gallery/thumb/th_gallery-48.jpg' />
</a>
<a href='/images/gallery/gallery-49 (2).jpg'>
    <img alt='gallery-49 (2) thumbnail' src='/images/gallery/thumb/th_gallery-49 (2).jpg' />
</a>
<a href='/images/gallery/gallery-49.jpg'>
    <img alt='gallery-49 thumbnail' src='/images/gallery/thumb/th_gallery-49.jpg' />
</a>
<a href='/images/gallery/gallery-52.jpg'>
    <img alt='gallery-52 thumbnail' src='/images/gallery/thumb/th_gallery-52.jpg' />
</a>
<a href='/images/gallery/gallery-54 (2).jpg'>
    <img alt='gallery-54 (2) thumbnail' src='/images/gallery/thumb/th_gallery-54 (2).jpg' />
</a>
<a href='/images/gallery/gallery-54.jpg'>
    <img alt='gallery-54 thumbnail' src='/images/gallery/thumb/th_gallery-54.jpg' />
</a>
<a href='/images/gallery/gallery-55 (2).jpg'>
    <img alt='gallery-55 (2) thumbnail' src='/images/gallery/thumb/th_gallery-55 (2).jpg' />
</a>
<a href='/images/gallery/gallery-55.jpg'>
    <img alt='gallery-55 thumbnail' src='/images/gallery/thumb/th_gallery-55.jpg' />
</a>
<a href='/images/gallery/gallery-56.jpg'>
    <img alt='gallery-56 thumbnail' src='/images/gallery/thumb/th_gallery-56.jpg' />
</a>
<a href='/images/gallery/gallery-60.jpg'>
    <img alt='gallery-60 thumbnail' src='/images/gallery/thumb/th_gallery-60.jpg' />
</a>
<a href='/images/gallery/gallery-61 (2).jpg'>
    <img alt='gallery-61 (2) thumbnail' src='/images/gallery/thumb/th_gallery-61 (2).jpg' />
</a>
<a href='/images/gallery/gallery-61.jpg'>
    <img alt='gallery-61 thumbnail' src='/images/gallery/thumb/th_gallery-61.jpg' />
</a>
<a href='/images/gallery/gallery-62.jpg'>
    <img alt='gallery-62 thumbnail' src='/images/gallery/thumb/th_gallery-62.jpg' />
</a>
<a href='/images/gallery/gallery-65 (2).jpg'>
    <img alt='gallery-65 (2) thumbnail' src='/images/gallery/thumb/th_gallery-65 (2).jpg' />
</a>
<a href='/images/gallery/gallery-65 (3).jpg'>
    <img alt='gallery-65 (3) thumbnail' src='/images/gallery/thumb/th_gallery-65 (3).jpg' />
</a>
<a href='/images/gallery/gallery-65.jpg'>
    <img alt='gallery-65 thumbnail' src='/images/gallery/thumb/th_gallery-65.jpg' />
</a>
<a href='/images/gallery/gallery-67.jpg'>
    <img alt='gallery-67 thumbnail' src='/images/gallery/thumb/th_gallery-67.jpg' />
</a>
<a href='/images/gallery/gallery-68.jpg'>
    <img alt='gallery-68 thumbnail' src='/images/gallery/thumb/th_gallery-68.jpg' />
</a>
<a href='/images/gallery/gallery-69.jpg'>
    <img alt='gallery-69 thumbnail' src='/images/gallery/thumb/th_gallery-69.jpg' />
</a>
<a href='/images/gallery/gallery-70.jpg'>
    <img alt='gallery-70 thumbnail' src='/images/gallery/thumb/th_gallery-70.jpg' />
</a>
<a href='/images/gallery/gallery-72.jpg'>
    <img alt='gallery-72 thumbnail' src='/images/gallery/thumb/th_gallery-72.jpg' />
</a>
<a href='/images/gallery/gallery-73.jpg'>
    <img alt='gallery-73 thumbnail' src='/images/gallery/thumb/th_gallery-73.jpg' />
</a>
<a href='/images/gallery/gallery-75 (2).jpg'>
    <img alt='gallery-75 (2) thumbnail' src='/images/gallery/thumb/th_gallery-75 (2).jpg' />
</a>
<a href='/images/gallery/gallery-75.jpg'>
    <img alt='gallery-75 thumbnail' src='/images/gallery/thumb/th_gallery-75.jpg' />
</a>
<a href='/images/gallery/gallery-79.jpg'>
    <img alt='gallery-79 thumbnail' src='/images/gallery/thumb/th_gallery-79.jpg' />
</a>
<a href='/images/gallery/gallery-80.jpg'>
    <img alt='gallery-80 thumbnail' src='/images/gallery/thumb/th_gallery-80.jpg' />
</a>
<a href='/images/gallery/gallery-81 (2).jpg'>
    <img alt='gallery-81 (2) thumbnail' src='/images/gallery/thumb/th_gallery-81 (2).jpg' />
</a>
<a href='/images/gallery/gallery-81 (3).jpg'>
    <img alt='gallery-81 (3) thumbnail' src='/images/gallery/thumb/th_gallery-81 (3).jpg' />
</a>
<a href='/images/gallery/gallery-81.jpg'>
    <img alt='gallery-81 thumbnail' src='/images/gallery/thumb/th_gallery-81.jpg' />
</a>
<a href='/images/gallery/gallery-84 (2).jpg'>
    <img alt='gallery-84 (2) thumbnail' src='/images/gallery/thumb/th_gallery-84 (2).jpg' />
</a>
<a href='/images/gallery/gallery-84 (3).jpg'>
    <img alt='gallery-84 (3) thumbnail' src='/images/gallery/thumb/th_gallery-84 (3).jpg' />
</a>
<a href='/images/gallery/gallery-84.jpg'>
    <img alt='gallery-84 thumbnail' src='/images/gallery/thumb/th_gallery-84.jpg' />
</a>
<a href='/images/gallery/gallery-86.jpg'>
    <img alt='gallery-86 thumbnail' src='/images/gallery/thumb/th_gallery-86.jpg' />
</a>
<a href='/images/gallery/gallery-88 (2).jpg'>
    <img alt='gallery-88 (2) thumbnail' src='/images/gallery/thumb/th_gallery-88 (2).jpg' />
</a>
<a href='/images/gallery/gallery-88.jpg'>
    <img alt='gallery-88 thumbnail' src='/images/gallery/thumb/th_gallery-88.jpg' />
</a>
<a href='/images/gallery/gallery-90.jpg'>
    <img alt='gallery-90 thumbnail' src='/images/gallery/thumb/th_gallery-90.jpg' />
</a>
<a href='/images/gallery/gallery-91 (2).jpg'>
    <img alt='gallery-91 (2) thumbnail' src='/images/gallery/thumb/th_gallery-91 (2).jpg' />
</a>
<a href='/images/gallery/gallery-91 (3).jpg'>
    <img alt='gallery-91 (3) thumbnail' src='/images/gallery/thumb/th_gallery-91 (3).jpg' />
</a>
<a href='/images/gallery/gallery-91.jpg'>
    <img alt='gallery-91 thumbnail' src='/images/gallery/thumb/th_gallery-91.jpg' />
</a>
<a href='/images/gallery/gallery-93.jpg'>
    <img alt='gallery-93 thumbnail' src='/images/gallery/thumb/th_gallery-93.jpg' />
</a>
<a href='/images/gallery/gallery-94 (2).jpg'>
    <img alt='gallery-94 (2) thumbnail' src='/images/gallery/thumb/th_gallery-94 (2).jpg' />
</a>
<a href='/images/gallery/gallery-94.jpg'>
    <img alt='gallery-94 thumbnail' src='/images/gallery/thumb/th_gallery-94.jpg' />
</a>
<a href='/images/gallery/gallery-95 (2).jpg'>
    <img alt='gallery-95 (2) thumbnail' src='/images/gallery/thumb/th_gallery-95 (2).jpg' />
</a>
<a href='/images/gallery/gallery-95.jpg'>
    <img alt='gallery-95 thumbnail' src='/images/gallery/thumb/th_gallery-95.jpg' />
</a>
<a href='/images/gallery/gallery-96.jpg'>
    <img alt='gallery-96 thumbnail' src='/images/gallery/thumb/th_gallery-96.jpg' />
</a>
          </LightGallery>
          </div>
      </Layout>
  )
}

export const Head = () => {
return (
  <title>Pack 248 - Pack Photo Gallery</title>
)
}
export default GalleryPage