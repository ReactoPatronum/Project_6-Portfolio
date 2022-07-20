import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const [sendComment, setSendComment] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      toast.success("Yorum Gönderildi!");
      setSendComment(false);
    } catch (err) {
      console.log(err);
      setSendComment(true);
      toast.error("Bir Hata Meydana Geldi.");
    }
  };
  return (
    <div name="contact" className="bg-[#0a192f] p-4">
      <div className="  w-full text-gray-300  grid grid-cols-4 max-w-[1000px] mx-auto py-32">
        <div className="col-span-4 md:col-span-2 md:mt-40">
          <h2 className="text-6xl">Bana Ulaşın</h2>
          <p className="mt-4 text-xl">
            Benimle çalışmak ya da bir proje için ortak olmak isterseniz
            doğrudan bana mail yazabilirsiniz.
          </p>
        </div>
        <div className="col-span-4 md:col-span-2 md:mt-40 md:ml-4">
          {sendComment?<form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="hidden"
              {...register("_id")}
              type="hidden"
              name="id"
            />

            <div>
              <p className="font-semibold text-lg">Adınız</p>
              <input
                className={`text-black w-full outline-none bg-gray-200 resize-none p-2 focus-within:bg-white border-2 focus-within:border-orange-300 
                    }`}
                {...register("name")}
                type="text"
              />
            </div>

            <div className="mt-6">
              <p className="font-semibold text-lg">Email</p>
              <input
                className={`text-black w-full outline-none bg-gray-200 resize-none p-2 focus-within:bg-white border-2 focus-within:border-orange-300 
                    }`}
                {...register("email", { required: true })}
                type="text"
              />
            </div>

            <div className="mt-6">
              <p className="font-semibold text-lg">Mesajınız</p>
              <textarea
                rows={5}
                className={`text-black w-full outline-none bg-gray-200 resize-none p-1 focus-within:bg-white border-2 focus-within:border-orange-300 
                    }`}
                {...register("comment", { required: true })}
                type="text"
              />
            </div>
            {errors.comment && (
                <p className="text-red-500">Lütfen Mesaj Kısmını Doldurunuz.</p>
              )}
              
              {errors.email && (
                <p className="text-red-500">Lütfen Email Kısmını Doldurunuz.</p>
              )}
            <button
              className={` text-white text-xl font-semibold bg-blue-500 transition-all duration-300 
                    } py-3 px-10 hover:bg-green-500`}
              type="submit"
            >
              Gönder
            </button>
          </form>:<h2 className="text-3xl text-green-500">Mesajınız Tarafıma Ulaşmıştır . Teşekkürler!</h2>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
