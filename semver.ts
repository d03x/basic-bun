import { semver } from "bun";
const version = "0.2.3";
console.log(semver.satisfies(version,'>=1.x'));

