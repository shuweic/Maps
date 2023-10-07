import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company: Company = new Company();


import { CustomMap} from "./CustomMap";
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);

