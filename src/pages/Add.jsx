import React from 'react';

const Add = () => {
  return (
    <div className='my-[100px]'>
      <h1 className='w-[90%] mx-auto mb-10 text-[25px] font-bold text-[#555]'>Add New Gig</h1>
       <form className='flex gap-[100px] w-[90%] add-gig-form mx-auto  justify-between'>
         <div className='flex flex-col gap-[30px] justify-between flex-1'>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="eg. I will do something I'm really good at" />
            <label htmlFor="category">Category</label>
            <select name="category" id="category" >
              <option value="Graphics & Design">Graphics & Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Writing & Translation">Writing & Translation</option>
              <option value="Video & Animation">Video & Animation</option>
              <option value="Music & Audio">Music & Audio</option>
              <option value="Programming & Tech">Programming & Tech</option>
              <option value="Data">Data</option>
              <option value="Business">Business</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Photography">Photography</option>
              <option value="End-to-End Projects">End-to-End Projects</option>
            </select>
            <label htmlFor="description">Cover Image</label>
            <input type="file" id="cover" name="cover" />
            <label htmlFor="description">Upload Images</label>
            <input type="file" id="cover" name="cover" />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" maxLength={30} placeholder="Describe your Gig" />
            <button className='font-bold text-[20px] bg-[var(--primaryColor)] text-white  py-[15px]'>Create</button>
         </div>
         <div className='flex flex-col gap-[30px] justify-between  flex-1'>
            <label htmlFor="Service Title">Service Title</label>
            <input type="text" id="Service Title" name="Service Title" placeholder="e.g. One-page web design" />
            <label htmlFor="Short Description">Short Description</label>
            <textarea id="Short Description" name="Short Description" maxLength={30} placeholder="Describe your Gig" />
            <label htmlFor="Delivery Time">Delivery Time <p className='text-[#888] inline-block'>(.g. 3 days)</p></label>
            <input type="text" id="Delivery Time" name="Delivery Time"/>
            <label htmlFor="Revisions">Revisions</label>
            <input type="number" min={0} id="Revisions" name="Revisions" />
            <label htmlFor="Add Features">Add Features</label>
            <input type="text" placeholder='e.g. page design' />
            <input type="text" placeholder='e.g. file uploading' />
            <input type="text" placeholder='e.g. setting up a domain' />
            <label htmlFor="price">Price</label>
            <input type="number" min={0} id="price" name="price" placeholder="e.g. One-page web design" />
         </div>
       </form>
    </div>
  );
}

export default Add;