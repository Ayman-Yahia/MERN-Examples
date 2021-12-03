import {render,act,fireEvent} from '@testing-library/react'
import Button from '../Button'
describe("Button Component",()=>{
    it("rendered button",()=>{
        const{getByTestId}=render(<Button />)
        const button=getByTestId("button")
        expect(button).toBeTruthy()
    })
    it("render one button before button click",()=>{
        const {getAllByTestId}=render(<Button/>)
        const buttonList=getAllByTestId("button")
        expect(buttonList).toHaveLength(1)
    })
    it("render two button after button click",()=>{
        act(async()=>{
            const {getAllByTestId}=render(<Button/>)
            const buttonList=getAllByTestId("button")
            await fireEvent.click(buttonList[0])
            expect(getAllByTestId("button")).toHaveLength(2)

        })

    })
})