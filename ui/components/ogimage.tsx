export function OGImageBox() {
	return (
      <div
          style={{
            position: 'relative',
            background: `radial-gradient(ellipse at center, #161C1F, #020202)`,
            width: '100%',
            height: '100%',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
      >
        <h3 style={{fontSize: 35, color: "#7366bd", fontWeight: 500}}>
          Виртуальная экскурсия
        </h3>
        <h1 style={{fontSize: 100, color: "#0089E3", fontWeight: 700, lineHeight: "0.7em"}}>
          ССК Звезда
        </h1>
        <h1 style={{fontSize: 47, color: "#FFFFFF", fontWeight: 500, textAlign: "center", maxWidth: "80%"}}>
          Этапы создания судно
        </h1>
      </div>
  )
}