import Image from 'next/image';
import bg from "../../../../public/background/contact-background.png"
import Form from '@/components/contact/Form';

const Contact = () => {
  return (
    <>
    <Image
        src={bg}
        className="-z-50 fixed top-0 left-0 w-full  h-full object-cover object-center opacity-35"
        priority
        size="100vw"
        alt="About-Background"
      />
      <article className='relative w-full flex flex-col items-center space-y-4'>
        <div className='flex flex-col items-center justify-center space-y-6 w-3/4'>
            <h1 className='text-accent font-semibold text-center text-4xl capitalize'>
                Summon the wizard
            </h1>
            <p className='text-center'>
                Step into the circle of enchantment and weave your words into the fabrix of the seek to conjure collaboration,unlock mysteries,or simply share tales of advancement treasured scrolls within this realm
            </p>
        </div>
      </article>
      <Form/>
    </>
  )
}

export default Contact