export default ({description}) => {
  return (
    <div>
      <style jsx>{`
        div {
          margin: 20px;
        }
      `}
      </style>
      {description || `This card doesn't have a description yet`}
    </div>
  )
}