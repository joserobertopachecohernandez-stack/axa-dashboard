 </button>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ padding:"16px 20px", borderTop:"1px solid #1e293b" }}>
          <p style={{ margin:0, fontSize:9, color:"#334155", textAlign:"center" }}>Datos actualizados · Junio 2024</p>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex:1, overflow:"auto", position:"relative" }}>
        {page === "exec" ? (
          <ExecutivePage onDrill={(id) => setPage(id)} />
        ) : currentObj ? (
          <ObjPage obj={currentObj} onBack={()=>setPage("exec")} />
        ) : null}
      </main>
    </div>
  );
}
