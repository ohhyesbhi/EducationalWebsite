import { Link } from "react-router-dom"

function App() {
  return (
    <footer className="bg-primarySecond w-[100%] h-[485px] flex items-center justify-center">

    <div className="flex justify-evenly flex-wrap items-start flex-1">

      <section className="w-[312px]" id="contactus">
        <p className="w-[106px] h-[40px]"></p>
        <h4 className="text-footerHeadText font-PublicSans font-semibold text-2xl leading-[2rem] tracking-[0.003rem] mt-[24px]">Contact Us</h4>
      
        <div id="contact-links">
          <p className="text-footerText2 font-PublicSans font-normal text-base mt-[15px]">
          <Link to={'tel:918255340012'}>Call : +91 82553 40012</Link>
          </p>

          <p className="text-footerText2 font-PublicSans font-normal text-base mt-[7px]">
          <Link to={'/'}>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</Link>
          </p>

          <p className="text-footerText2 font-PublicSans font-normal text-base my-[15px]">
          <Link to={'mailto:example@mail.com'}>Email: example@mail.com</Link>
          </p>
        </div>

        <div className="flex gap-[10px]" id="social-media-card">
          <Link to={'/'}>
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="49" rx="24" fill="#F1F2F8"/>
<path d="M28.9851 13.6666H25.5888C23.5734 13.6666 21.3316 14.5309 21.3316 17.5096C21.3415 18.5474 21.3316 19.5414 21.3316 20.6601H19V24.443H21.4038V35.3333H25.8208V24.3711H28.7362L29 20.6495H25.7447C25.7447 20.6495 25.752 18.9939 25.7447 18.5131C25.7447 17.336 26.946 17.4035 27.0183 17.4035C27.5899 17.4035 28.7014 17.4052 28.9868 17.4035V13.6666H28.9851Z" fill="#3461FD"/>
</svg>
          </Link>

          <Link to={'/'}>
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="49" rx="24" fill="#F1F2F8"/>
<g clipPath="url(#clip0_1620_530)">
<path d="M14 24.5C14 22.6867 14.4467 21.0133 15.34 19.48C16.2333 17.9467 17.4467 16.7333 18.98 15.84C20.5133 14.9467 22.1867 14.5 24 14.5C25.8133 14.5 27.4867 14.9467 29.02 15.84C30.5533 16.7333 31.7667 17.9467 32.66 19.48C33.5533 21.0133 34 22.6867 34 24.5C34 26.3133 33.5533 27.9867 32.66 29.52C31.7667 31.0533 30.5533 32.2667 29.02 33.16C27.4867 34.0533 25.8133 34.5 24 34.5C22.1867 34.5 20.5133 34.0533 18.98 33.16C17.4467 32.2667 16.2333 31.0533 15.34 29.52C14.4467 27.9867 14 26.3133 14 24.5ZM15.66 24.5C15.66 26.58 16.36 28.4133 17.76 30C18.4 28.7467 19.4133 27.5533 20.8 26.42C22.1867 25.2867 23.54 24.5733 24.86 24.28C24.66 23.8133 24.4667 23.3933 24.28 23.02C21.9867 23.7533 19.5067 24.12 16.84 24.12C16.32 24.12 15.9333 24.1133 15.68 24.1C15.68 24.1533 15.6767 24.22 15.67 24.3C15.6633 24.38 15.66 24.4467 15.66 24.5ZM15.92 22.44C16.2133 22.4667 16.6467 22.48 17.22 22.48C19.4467 22.48 21.56 22.18 23.56 21.58C22.5467 19.78 21.4333 18.28 20.22 17.08C19.1667 17.6133 18.2633 18.3533 17.51 19.3C16.7567 20.2467 16.2267 21.2933 15.92 22.44ZM18.9 31.08C20.4067 32.2533 22.1067 32.84 24 32.84C24.9867 32.84 25.9667 32.6533 26.94 32.28C26.6733 30 26.1533 27.7933 25.38 25.66C24.1533 25.9267 22.9167 26.6 21.67 27.68C20.4233 28.76 19.5 29.8933 18.9 31.08ZM21.96 16.44C23.1333 17.6533 24.22 19.1667 25.22 20.98C27.0333 20.22 28.4 19.2533 29.32 18.08C27.7733 16.8 26 16.16 24 16.16C23.32 16.16 22.64 16.2533 21.96 16.44ZM25.94 22.4C26.14 22.8267 26.3667 23.3667 26.62 24.02C27.6067 23.9267 28.68 23.88 29.84 23.88C30.6667 23.88 31.4867 23.9 32.3 23.94C32.1933 22.1267 31.54 20.5133 30.34 19.1C29.4733 20.3933 28.0067 21.4933 25.94 22.4ZM27.12 25.42C27.8 27.3933 28.26 29.42 28.5 31.5C29.5533 30.82 30.4133 29.9467 31.08 28.88C31.7467 27.8133 32.1467 26.66 32.28 25.42C31.3067 25.3533 30.42 25.32 29.62 25.32C28.8867 25.32 28.0533 25.3533 27.12 25.42Z" fill="#3461FD"/>
</g>
<defs>
<clipPath id="clip0_1620_530">
<rect width="20" height="20" fill="white" transform="translate(14 14.5)"/>
</clipPath>
</defs>
</svg>

          </Link>

          <Link to={'/'}>
            
<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="49" rx="24" fill="#F1F2F8"/>
<g clipPath="url(#clip0_1620_531)">
<path d="M14 16.823C14 16.1496 14.2252 15.594 14.6757 15.1563C15.1261 14.7186 15.7117 14.4998 16.4324 14.4998C17.1403 14.4998 17.713 14.7152 18.1506 15.1462C18.601 15.5907 18.8263 16.1698 18.8263 16.8836C18.8263 17.5301 18.6075 18.0688 18.1699 18.4997C17.7194 18.9442 17.1274 19.1664 16.3938 19.1664H16.3745C15.6667 19.1664 15.094 18.9442 14.6564 18.4997C14.2188 18.0553 14 17.4964 14 16.823ZM14.251 34.4997V21.0048H18.5367V34.4997H14.251ZM20.9112 34.4997H25.1969V26.9644C25.1969 26.493 25.2484 26.1294 25.3514 25.8735C25.5315 25.4156 25.805 25.0283 26.1718 24.7119C26.5386 24.3954 26.9987 24.2371 27.5521 24.2371C28.9936 24.2371 29.7143 25.2539 29.7143 27.2876V34.4997H34V26.7624C34 24.7691 33.5496 23.2573 32.6486 22.227C31.7477 21.1967 30.5573 20.6816 29.0772 20.6816C27.417 20.6816 26.1236 21.429 25.1969 22.924V22.9644H25.1776L25.1969 22.924V21.0048H20.9112C20.9369 21.4358 20.9498 22.7758 20.9498 25.025C20.9498 27.2741 20.9369 30.4324 20.9112 34.4997Z" fill="#3461FD"/>
</g>
<defs>
<clipPath id="clip0_1620_531">
<rect width="20" height="20" fill="white" transform="translate(14 14.5)"/>
</clipPath>
</defs>
</svg>
          </Link>

          <Link to={'/'}>
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="49" rx="24" fill="#F1F2F8"/>
<g clipPath="url(#clip0_1620_532)">
<path d="M20.6672 24.5C20.6672 22.6591 22.1591 21.1664 24 21.1664C25.8409 21.1664 27.3336 22.6591 27.3336 24.5C27.3336 26.3409 25.8409 27.8336 24 27.8336C22.1591 27.8336 20.6672 26.3409 20.6672 24.5ZM18.8651 24.5C18.8651 27.336 21.164 29.6349 24 29.6349C26.836 29.6349 29.1349 27.336 29.1349 24.5C29.1349 21.664 26.836 19.3651 24 19.3651C21.164 19.3651 18.8651 21.664 18.8651 24.5ZM28.1381 19.1616C28.1381 19.8239 28.6753 20.3619 29.3385 20.3619C30.0008 20.3619 30.5388 19.8239 30.5388 19.1616C30.5388 18.4992 30.0016 17.962 29.3385 17.962C28.6753 17.962 28.1381 18.4992 28.1381 19.1616ZM19.9596 32.6397C18.9847 32.5953 18.4548 32.433 18.1026 32.2956C17.6357 32.1139 17.3029 31.8974 16.9523 31.5477C16.6026 31.1979 16.3853 30.8651 16.2044 30.3982C16.067 30.046 15.9047 29.5162 15.8603 28.5412C15.8118 27.4871 15.8021 27.1704 15.8021 24.5C15.8021 21.8296 15.8126 21.5137 15.8603 20.4588C15.9047 19.4838 16.0679 18.9548 16.2044 18.6018C16.3861 18.1349 16.6026 17.8021 16.9523 17.4515C17.3021 17.1018 17.6349 16.8845 18.1026 16.7036C18.4548 16.5662 18.9847 16.4039 19.9596 16.3595C21.0137 16.311 21.3304 16.3013 24 16.3013C26.6704 16.3013 26.9863 16.3118 28.0412 16.3595C29.0162 16.4039 29.5452 16.567 29.8982 16.7036C30.3651 16.8845 30.6979 17.1018 31.0485 17.4515C31.3982 17.8013 31.6147 18.1349 31.7964 18.6018C31.9338 18.954 32.0961 19.4838 32.1406 20.4588C32.189 21.5137 32.1987 21.8296 32.1987 24.5C32.1987 27.1696 32.189 27.4863 32.1406 28.5412C32.0961 29.5162 31.933 30.046 31.7964 30.3982C31.6147 30.8651 31.3982 31.1979 31.0485 31.5477C30.6987 31.8974 30.3651 32.1139 29.8982 32.2956C29.546 32.433 29.0162 32.5953 28.0412 32.6397C26.9871 32.6882 26.6704 32.6979 24 32.6979C21.3304 32.6979 21.0137 32.6882 19.9596 32.6397ZM19.8772 14.5606C18.8126 14.609 18.0856 14.7779 17.4499 15.025C16.7924 15.2803 16.2351 15.6228 15.6785 16.1785C15.1228 16.7342 14.7803 17.2916 14.525 17.9499C14.2779 18.5856 14.109 19.3126 14.0606 20.3772C14.0113 21.4435 14 21.7843 14 24.5C14 27.2157 14.0113 27.5565 14.0606 28.6228C14.109 29.6874 14.2779 30.4144 14.525 31.0501C14.7803 31.7076 15.122 32.2658 15.6785 32.8215C16.2342 33.3772 16.7916 33.7189 17.4499 33.975C18.0864 34.2221 18.8126 34.391 19.8772 34.4394C20.9443 34.4879 21.2843 34.5 24 34.5C26.7165 34.5 27.0565 34.4887 28.1228 34.4394C29.1874 34.391 29.9144 34.2221 30.5501 33.975C31.2076 33.7189 31.7649 33.3772 32.3215 32.8215C32.8772 32.2658 33.2189 31.7076 33.475 31.0501C33.7221 30.4144 33.8918 29.6874 33.9394 28.6228C33.9879 27.5557 33.9992 27.2157 33.9992 24.5C33.9992 21.7843 33.9879 21.4435 33.9394 20.3772C33.891 19.3126 33.7221 18.5856 33.475 17.9499C33.2189 17.2924 32.8772 16.7351 32.3215 16.1785C31.7658 15.6228 31.2076 15.2803 30.5509 15.025C29.9144 14.7779 29.1874 14.6082 28.1236 14.5606C27.0574 14.5121 26.7165 14.5 24.0008 14.5C21.2843 14.5 20.9443 14.5113 19.8772 14.5606Z" fill="#3461FD"/>
</g>
<defs>
<clipPath id="clip0_1620_532">
<rect width="20" height="20" fill="white" transform="translate(14 14.5)"/>
</clipPath>
</defs>
</svg>

          </Link>

          <Link to={'/'}>
            
<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="49" rx="24" fill="#F1F2F8"/>
<path d="M22.0703 23.4218C22.0703 23.4218 23.9626 23.2831 23.9626 21.0928C23.9626 18.9024 22.4145 17.8334 20.4534 17.8334H14.0002V30.0739H20.4534C20.4534 30.0739 24.3928 30.1968 24.3928 26.4611C24.3928 26.4611 24.5646 23.4218 22.0703 23.4218ZM19.9889 20.009H20.4534C20.4534 20.009 21.3306 20.009 21.3306 21.2826C21.3306 22.556 20.8147 22.7406 20.2296 22.7406H16.8436V20.009H19.9889ZM20.271 27.8984H16.8436V24.6273H20.4534C20.4534 24.6273 21.7608 24.6103 21.7608 26.3083C21.7608 27.74 20.7843 27.8876 20.271 27.8984ZM29.6467 20.9477C24.8776 20.9477 24.8818 25.6509 24.8818 25.6509C24.8818 25.6509 24.5546 30.33 29.6467 30.33C29.6467 30.33 33.8901 30.5693 33.8901 27.075H31.7078C31.7078 27.075 31.7805 28.3909 29.7195 28.3909C29.7195 28.3909 27.5368 28.5353 27.5368 26.2613H33.9628C33.9628 26.2613 34.666 20.9477 29.6467 20.9477ZM27.5129 24.6273C27.5129 24.6273 27.7793 22.7406 29.6952 22.7406C31.6106 22.7406 31.5866 24.6273 31.5866 24.6273H27.5129ZM32.095 20.0618H26.9786V18.5545H32.095V20.0618Z" fill="#3461FD"/>
</svg>

          </Link>
        </div>

      </section>

      <section id="explore">
        <h4 className="text-footerHeadText font-PublicSans font-semibold text-2xl tracking-[0.003rem]">Explore</h4>
        <div id="explore-links">
          <p className="text-footerText font-PublicSans font-normal text-base mt-[25px]"><Link to='/'>Home</Link></p>
          <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>About</Link></p>
          <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Course</Link></p>
          <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Blog</Link></p>
          <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Contact</Link></p>
        </div>
      </section>


      <section id="category">
        <h4 className="text-footerHeadText font-PublicSans font-semibold text-2xl tracking-[0.003rem]">Category</h4>
          <div id="category-links">
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem] mt-[25px]"><Link to='/'>Design</Link></p>
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Development</Link></p>
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Marketing</Link></p>
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Business</Link></p>
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Lifestyle</Link></p>
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Photography</Link></p>
            <p className="text-footerText font-PublicSans font-normal text-base mt-[1rem]"><Link to='/'>Music</Link></p>
          </div>
      </section>


      <section className="w-[296px]" id="subscribe">
        <p className="text-footerHeadText font-PublicSans font-semibold text-xl tracking-[0.003rem]">Subscribe</p>
        <p className="text-footerText font-PublicSans font-normal text-base mt-[25px]">Lorem Ipsum has been them an industry printer took a galley make book.</p>
        <input className="p-[1rem] rounded-[8px] mt-[1.5rem]" type="text" placeholder="Email here" />
        <button className="bg-gradient-to-b from-btnGrad1 to-btnGrad2 block px-[24px] py-[12px] rounded-[100px] text-footerHeadText mt-[1.5rem]">Subscribe Now</button>
      </section>
    </div>

    </footer>

  )
}

export default App
