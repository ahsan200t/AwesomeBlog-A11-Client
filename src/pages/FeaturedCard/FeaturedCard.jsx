
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const FeaturedCard = () => {    
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        " http://localhost:5000/featured-blogs"
       );
       setFeaturedBlog(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    getData()
  },[])
    const columns = [
        {
          name: "Serial",
          cell: (row,index) => index+1,
          selector: (row)=>row.cell,
          sortable: true,
          
          
          
        },
        {
          name: "Title",
          selector: (row) => row.title,
          sortable: true,
        },
        {
          name: "Owner",
          selector: (row) => row.user,
          sortable: true,
        },
        {
          name: "Profile",
          selector: (row) => <img className="w-16 h-16 rounded-full" src={row.owner} alt="" />,
          sortable: true,
        },
      ];
    
    return (
        <div>
             <DataTable 
             columns={columns} 
             data={featuredBlog}
             fixedHeader
             highlightOnHover  />
        </div>
    );
};

export default FeaturedCard;