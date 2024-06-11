import React from 'react'

const Join = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section>
      <p className='sm:text-lg text-center max-w-5xl mx-auto py-16 my-1.5'>
      Please note that restaurants regularly change their reservation release schedules, so accuracy is not 100% guaranteed. If something looks wrong, please <a className='text-brand-orange underline' href="#">reach out.</a>
      </p>

      <div className='max-w-96 mx-auto sm:text-lg text-center'>
        <p className='mb-3'>Subscribe to our newsletter for access</p>
        <p>too more Restaurant tools!</p>
        <form onSubmit={handleSubmit} className='flex items-center justify-between gap-1 bg-brand-black-100 border h-[60px] border-brand-orange rounded-full p-1 mt-10'>
          <input className='w-full flex-1 h-full bg-transparent outline-none border-none pl-6' type="email" placeholder='Enter your email' />
          <button className='flex items-center gap-1 rounded-full bg-brand-orange px-4 h-full' type='submit'>
            <span className='pb-1 text-lg font-atyp'>Subscribe</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
              <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM19.7075 15.2925C19.8005 15.3854 19.8742 15.4957 19.9246 15.6171C19.9749 15.7385 20.0008 15.8686 20.0008 16C20.0008 16.1314 19.9749 16.2615 19.9246 16.3829C19.8742 16.5043 19.8005 16.6146 19.7075 16.7075L14.7075 21.7075C14.6146 21.8004 14.5043 21.8741 14.3829 21.9244C14.2615 21.9747 14.1314 22.0006 14 22.0006C13.8686 22.0006 13.7385 21.9747 13.6171 21.9244C13.4957 21.8741 13.3854 21.8004 13.2925 21.7075C13.1996 21.6146 13.1259 21.5043 13.0756 21.3829C13.0253 21.2615 12.9994 21.1314 12.9994 21C12.9994 20.8686 13.0253 20.7385 13.0756 20.6171C13.1259 20.4957 13.1996 20.3854 13.2925 20.2925L17.5863 16L13.2925 11.7075C13.1049 11.5199 12.9994 11.2654 12.9994 11C12.9994 10.7346 13.1049 10.4801 13.2925 10.2925C13.4801 10.1049 13.7346 9.99944 14 9.99944C14.2654 9.99944 14.5199 10.1049 14.7075 10.2925L19.7075 15.2925Z" fill="white" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Join