/* eslint-disable react/prop-types */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputText from '../input/inputText';
import addimage from '../../../assets/icons/add-image.png';
import Button from '../../base/button/button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransitionsModal = ({ open, onClose }) => {
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState('');

  React.useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className='flex flex-col md:flex-row py-10 px-28'>
            <div className='flex flex-col relative right-10'>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-input"
              />
              <label htmlFor="image-input" className='cursor-pointer'>
                {imagePreview ? (
                  <div className='object-cover bg-gray-500 grid justify-center rounded-xl outline-dashed w-96 h-64 py-5'>
                    <img className='w-full h-full object-cover' src={imagePreview} alt="Preview" />
                  </div>
                ) : (
                  <div className='object-cover bg-gray-500 grid justify-center rounded-xl outline-dashed w-96 h-56 py-5 hover:bg-gray-700'>
                    <img className='w-36' src={addimage} alt="addimage" />
                    <h1 className='text-white font-semibold text-2xl'>Add Image +</h1>
                  </div>
                )}
              </label>
              <div className='flex justify-center py-10'>
                <Button
                  onClick={handleSubmit}
                  className="w-96 bg-blue-500 hover:bg-blue-700 text-white"
                >
                  Update Product
                </Button>
              </div>
            </div>
            <div className='flex flex-col flex-grow'>
              <form>
                <div className='mb-5'>
                  <label className='text-lg font-semibold mb-2 px-5' htmlFor="title">Title product</label>
                  <InputText
                    id="title"
                    placeholder="Write Title...."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className='mb-5'>
                  <label className='text-lg font-semibold mb-2 px-5' htmlFor="price">Price product</label>
                  <InputText
                    id="price"
                    placeholder="Write Price...."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className='mb-5 px-5'>
                  <label className='text-lg font-semibold mb-2' htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Write Description...."
                    className="shadow-md p-5 border w-96 relative top-5 focus:outline-none focus:ring focus:border-blue-500 h-28"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default TransitionsModal;
