import dayjs from "dayjs";
import { Launch } from "../queries/interfaces";

export class LaunchModel {
  id!: string;
  site!: string;
  date!: string;
  status!: string;
  mission!: string;

  constructor({ id, launch_success, launch_date_utc, mission_name, launch_site }: Launch) {
    this.mission = mission_name;
    this.id = `${id}_${mission_name}`;
    this.site = launch_site.site_name;
    this.status = launch_success ? "Succeeded" : "Failed";
    this.date = dayjs(launch_date_utc).format("YYYY/MM/DD");
  }
}
