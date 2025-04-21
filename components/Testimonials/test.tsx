import Image from 'next/image'
import './test.css'

interface TestimonialProps {
  logo: string
  text: string
  author: {
    name: string
    title: string
    image: string
  }
}

const testimonials: TestimonialProps[] = [
  {
    logo: "/Images/alba mart.png",
    text: "We are thoroughly impressed with the e-commerce trading website developed by Acroyna Solutions. The platform offers a smooth and efficient trading experience, with easy product listing management and secure transaction features.",
    author: {
      name: "Jahangir Alam",
      title: "Founder of Alba Mart",
      image: "/avatar.png"
    }
  },
  {
    logo: "/Images/jyps.png",
    text: "Partnering with Acroyna Solutions to develop our e-commerce trading website was a game-changer. The platform is not just functional but intuitive, creating a flawless trading experience for our users.",
    author: {
      name: "Shubham Kumar",
      title: "Founder of Jpssy",
      image: "/avatar.png"
    }
  },
  {
    logo: "/Images/merage.png",
    text: "We had an amazing experience with Acroyna Solutions. They understood our requirements perfectly and delivered a feature-rich platform that is both scalable and user-friendly.",
    author: {
      name: "Satyam Rai",
      title: "Founder of Merage ",
      image: "/avatar.png"
    }
  }
]

function TestimonialCard({ logo, text, author }: TestimonialProps) {
  return (
    <div className="testimonial-card">
      <Image
        src={logo || "/placeholder.svg"}
        alt="Company logo"
        width={80}
        height={60}
        className="testimonial-logo"
      />
      <p className="testimonial-content">{text}</p>
      <div className="testimonial-author">
        <Image
          src={author.image || "/placeholder.svg"}
          alt={author.name}
          width={50}
          height={50}
          className="author-image"
        />
        <div className="author-info">
          <h3 className="author-name">{author.name}</h3>
          <p className="author-title">{author.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
    return (
      <section id='testimonials'  className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Our Clients Speak</h2>
          <p className="testimonials-subtitle">Our Clients’ Success, Our Pride</p>
        </div>
        <div className="testimonial-cards-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    )
  }
  
