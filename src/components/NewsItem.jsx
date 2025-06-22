
import image from '../assets/news.jpg'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card bg-dark text-light mb-3 px-2 py-2" style={{ maxWidth: "345px" }}>
  <img src={src || image} style={{height:"200px",width:"100%",objectFit: "cover" }} className="card-img-top" alt="news" />
  <div className="card-body">
   <h5 className="card-title">{title.slice(0, 50)}</h5>
    <p className="card-text">{description ? description.slice(0,90):"NewsNow USA brings you the latest and most important headlines from across the United States — politics, economy, protests, sports, and more —"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>  
    </div>
  )
}

export default NewsItem
