import CVLayout from "../../components/CVLayout/CVLayout"
import { ProfilePhoto } from "../../components/intro/ProfilePhoto/ProfilePhoto"
import { WhoAmI } from "../../components/intro/WhoAmI/WhoAmI"

export const Intro = () => {
  return (
    <CVLayout>
      <CVLayout.ColumnLeft>
        <ProfilePhoto />
      </CVLayout.ColumnLeft>

      <CVLayout.ColumnRight>
        <WhoAmI />
      </CVLayout.ColumnRight>
    </CVLayout>
  )
}
