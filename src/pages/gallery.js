import * as React from 'react';
import Layout from '../components/layout';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryPage = () => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <Layout pageTitle="Gallery">
      <div className="App h-full m-6">
          <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
          >
              <a href="images/gallery/img1.jpg">
                  <img alt="img1" src="images/gallery/thumb1.jpg" />
              </a>
              <a href="images/gallery/img2.jpg">
                  <img alt="img2" src="images/gallery/thumb2.jpg" />
              </a>
          </LightGallery>
      </div>
      </Layout>
  )
}

export const Head = () => <title>Pack 248 - Pack Photo Gallery</title>
export default GalleryPage