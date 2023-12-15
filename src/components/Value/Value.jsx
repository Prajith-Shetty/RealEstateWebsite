import React, { useState } from 'react'
import './Value.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'

const Value = () => {

  const [expandedItems, setExpandedItems] = useState([0]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };
  
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'>We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={expandedItems}
          >
            {
              data.map((item, i) => {
                
                return (
                  // to give dynamic classname to accordian item
                  <AccordionItem className={`accordionItem ${expandedItems.includes(i) ? 'expanded' : 'collapsed'}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter accordionButton' onClick={() => toggleItem(i)}>

                        <div className="flexCenter icon">
                          {item.icon}
                        </div>

                        <span className='primaryText'>{item.heading}</span>

                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              }
              )
            }
          </Accordion>
          {/* This code maintains the state of expanded accordion items in the expandedItems array and toggles them based on the onClick event of the AccordionItemButton. */}

            {/* //accoring to video
            <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  // to give dynamic classname to accordian item
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter accordionButton'>

                        <AccordionItemState>
                          {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                        </AccordionItemState>

                        <div className="flexCenter icon">
                          {item.icon}
                        </div>

                        <span className='primaryText'>{item.heading}</span>

                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              }
              )
            }
          </Accordion> */}
        </div>
      </div>
    </section>
  )
}

export default Value