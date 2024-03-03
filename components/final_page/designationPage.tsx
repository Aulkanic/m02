import Navbar from "../ui/Navbar"
import Designation from "../shared_add/designation"
import DesignationTable from "../shared_table/designationTable"

const designationPage = () => {
  return (
    <div>
        <Navbar />
        <Designation />
        <DesignationTable />
    </div>
  )
}

export default designationPage