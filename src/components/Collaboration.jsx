import { check } from "../assets"
import { collabContent, collabText } from "../constants"
import Button from "./Button"
import Section from "./Section"

const Collaboration = () => {
  return (
    <Section
        crosses
    >
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">
                    AI Chat for seamless collaboration
                </h2>
                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.map((item) =>(
                    <li key={item.id} className="mb-3 py-3">
                        <div className="flex items-center">
                            <img 
                                src={check}
                                width={24}
                                height={24}
                                alt="check" 
                            />
                            <h6 className="body-2 ml-5">
                                {item.title}
                            </h6>
                        </div>
                        {item.text && (
                            <p className="body-2 mt-2 text-n-4">
                                {item.text}
                            </p>
                        )}
                    </li>
                ))}
                </ul>

                <Button>
                    Try it now
                </Button>
            </div>
            <div className="lg:ml-auto xl:w-[38rem]">
                <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                    {collabText}
                </p>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration