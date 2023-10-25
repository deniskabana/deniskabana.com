import { useMemo } from "react"
import { Timeline } from "@mui/lab"
import { experienceList } from "../../../constants/jobExperience"
import { SingleJobDetail } from "./SingleJobDetail"
import { styles } from "./styles"

export const JobsList = () => {
  const jobsTimeline = useMemo(
    () =>
      experienceList.map((job, index) => (
        <SingleJobDetail job={job} index={index} key={job.name} />
      )),
    [],
  )

  return <Timeline className={styles.timelineWrapper}>{jobsTimeline}</Timeline>
}
