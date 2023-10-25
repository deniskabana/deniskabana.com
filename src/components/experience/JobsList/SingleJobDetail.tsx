import { Typography, useTheme } from "@mui/material"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab"
import Image from "next/image"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import DateRangeIcon from "@mui/icons-material/DateRange"
import { FONT_WEIGHTS } from "@/styles"
import { Experience, experienceList } from "../../../constants/jobExperience"
import { styles } from "./styles"

type SingleJobDetailProps = {
  index: number
  job: Experience
}

export const SingleJobDetail = ({ job, index }: SingleJobDetailProps) => {
  const theme = useTheme()

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={styles.timelineDot(theme)}>
          <Image src={job.logoUrl} alt={job.name} width={32} height={32} />
        </TimelineDot>
        {index < experienceList.length - 1 && (
          <TimelineConnector className={styles.timelineConnector(theme)} />
        )}
      </TimelineSeparator>
      <TimelineContent>
        <div className={styles.timelineContent}>
          <Typography variant="body1" color="secondary" fontWeight={FONT_WEIGHTS.bold}>
            {job.name}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={FONT_WEIGHTS.bold}
            className={styles.positionTitle}
          >
            {job.positionTitle}
          </Typography>
          <div className={styles.durationAndLocation}>
            <Typography variant="body2" color={theme.palette.text.disabled}>
              <LocationOnOutlinedIcon color="secondary" fontSize="inherit" />
              <span>{job.location}</span>
            </Typography>
          </div>
          <div className={styles.durationAndLocation}>
            <Typography variant="body2" color={theme.palette.text.disabled}>
              <DateRangeIcon color="secondary" fontSize="inherit" />
              <span>
                {job.dateStart}&nbsp;&mdash;&nbsp;{job.dateEnd}
              </span>
            </Typography>
          </div>

          <Typography variant="body2">
            {job.descriptionPoints && (
              <ul className={styles.descriptionPoints}>
                {job.descriptionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            <span className={styles.description(theme)}>{job.description}</span>
          </Typography>
        </div>
      </TimelineContent>
    </TimelineItem>
  )
}
