AFRAME.registerComponent("movement", {
    schema:
        {   
            lookYaw: {type: "number", default: 0},
            lookPitch: {type: "number", default: 0},
            lookRoll: {type: "number", default: 0}
        },
    init: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key="w"){
                this.lookPitch-=0.5
                if(this.lookPitch <-3){this.lookPitch=-3}
            }else{
                this.lookYaw+=0.5
                if(this.lookYaw >3){this.lookYaw=3}                
            }

            if(e.key="a"){
                this.lookYaw-=0.5
                if(this.lookYaw <-3){this.lookYaw=-3}
            }else{
                this.lookYaw+=0.5
                if(this.lookYaw >3){this.lookYaw=3}
            }

            if(e.key="s"){
                this.lookPitch+=0.5
                if(this.lookPitch > 3){this.lookPitch=3}
            }else{
                this.lookPitch-=0.5
                if(this.lookPitch <-3){this.lookPitch=-3}
            }
            
            if(e.key="d"){
                this.lookYaw+=0.5
                if(this.lookYaw >3){this.lookYaw=3}
            }
            if(e.key="q"){
                this.lookRoll-=0.5
                if(this.lookRoll <-3){this.lookRoll=-3}
            }
            if(e.key="e"){
                this.lookRoll+=0.5
                if(this.lookRoll >3){this.lookRoll=3}
            }
        })
    },
    tick: function(){

        var thrust= new THREE.vector3(sin())

    }
})