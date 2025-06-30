const hotspotData = [
  {
    label: "Evacuation Assembly Point",
    icon: "assets/hotspot/icon/iottag.png",
    ...percentToRatio(8.5, 55.5),
    isSpecial: false,
    medias: [
      { name: "Assembly Muster Point",
        desc: "Enable personnel to initiate a duress signal and evacuation procedures. SMS and email links are sent to management teams to facilitate a smooth and coordinated evacuation.", 
        url: "assets/hotspot/media/Assembly-Muster-Point.mp4",
        thumbImg: "assets/hotspot/thumbnail/assembly-point-thumbnail.png",
      }
    ]
  },
  {
    label: "Fall Detection SOS",
    icon: "assets/hotspot/icon/engineer.png",
    ...percentToRatio(38, 75), // 637px/1920px = 33.18%, 736px/1084px = 67.90%
    isSpecial: false,
    medias: [
      { name:"Fall Detection SOS",
        desc: "Instant alerts from helmet tags ensure critical events are actioned immediately.  Real-time updates allow first responders to react swiftly and locate personnel in distress.", 
        url: "assets/hotspot/media/Fall-Detection-SOS.mp4",
        thumbImg: "assets/hotspot/thumbnail/fall-detection-thumbnail.png" },
      { name: "Hazards",
        desc: "Instant alerts from helmet tags ensure critical events are actioned immediately.  Real-time updates allow first responders to react swiftly and locate personnel in distress.", 
        url: "assets/hotspot/2nd_media/fall-detection-SOS-2-hazards.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/fall-detection-SOS-2-hazards-thumbnail.png" }
    ]
  },
  {
    label: "Team Alert",
    icon: "assets/hotspot/icon/iottag.png",
    ...percentToRatio(13.4, 47), // 450px/1920px = 23.44%, 485px/1084px = 44.74%
    isSpecial: false,
    medias: [
      { name: "Team Alert",
        desc: "Empower workers by providing real-time tools for managing safety and foster a safer work environment. Enhance compliance adherence and the overall well-being of the workforce.", 
        url: "assets/hotspot/media/Team-Alert.mp4",
        thumbImg: "assets/hotspot/thumbnail/team-alert-thumbnail.png" }
    ]
  },
  {
    label: "Air Quality + Wind Direction",
    icon: "assets/hotspot/icon/air-quality.png",
    ...percentToRatio(37, 46.5), // 680px/1920px = 35.42%, 440px/1084px = 40.59%
    isSpecial: false,
    medias: [
      { name: "Air Quality",
        desc: "Monitoring levels in real time, ensuring safe working conditions by providing essential data for proactive risk management and compliance.", 
        url: "assets/hotspot/media/Air-Quality.mp4",
        thumbImg: "assets/hotspot/thumbnail/air-quality-thumbnail.png" },
      { name: "Sustainability Co2",
        desc: "Monitoring levels in real time, ensuring safe working conditions by providing essential data for proactive risk management and compliance.", 
        url: "assets/hotspot/2nd_media/air-quality-2-sustainability-co2.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/air-quality-2-sustainability-co2-thumbnail.png" },
    ]
  },
  {
    label: "Logistics + Supply Chain",
    icon: "assets/hotspot/icon/logistics.png",
    ...percentToRatio(49.5, 30), // 830px/1920px = 43.23%, 305px/1084px = 28.14%
    isSpecial: false,
    medias: [
      { name: "Aboveground tracking",
        desc: "Enhance operational efficiency, enhances visibility, reducing delays and improving overall supply chain performance.", 
        url: "assets/hotspot/media/Logistics-supply-chain.mp4",
        thumbImg: "assets/hotspot/thumbnail/logistics-supply-chain-thumbnail.png"
      },
      { name: "Underground tracking",
        desc: "Enhance operational efficiency, enhances visibility, reducing delays and improving overall supply chain performance.", 
        url: "assets/hotspot/media/asset-list-logistics-supply-chain_2.mp4",
        thumbImg: "assets/hotspot/thumbnail/logistics_supply_chain_2_thumbnail.png"
      },
    ]
  },
  {
    label: "Leadership Tools",
    icon: "assets/hotspot/icon/iottag.png",
    ...percentToRatio(49.5, 94), // 900px/1920px = 46.88%, 900px/1084px = 83.03%
    isSpecial: false,
    medias: [
      { name: "Leadership Tools",
        desc: "Streamline operations by integrating, accurately validate attendance via safety tags and deliver sessions information to contractor app's to manage action items.",
        url: "assets/hotspot/media/Toolbox-Meeting.mp4",
        thumbImg: "assets/hotspot/thumbnail/toolbox-meeting-thumbnail.png" }
    ]
  },
  {
    label: "Operator ID + Cabin Temp.",
    icon: "assets/hotspot/icon/engineer.png",
    ...percentToRatio(38.8, 38), // 600px/1920px = 31.25%, 380px/1084px = 35.06%
    isSpecial: false,
    medias: [
      { name: "Operator Tracking",
        desc: "Enhancing safety tracking for machine and vehicle operators in challenging, uncomfortable and isolated spaces.", 
        url: "assets/hotspot/media/Operator-tracking-env-sensors.mp4",
        thumbImg: "assets/hotspot/thumbnail/operator-tracking-env-sensors-thumbnail.png"
      },
      { name: "Cabin temp",
        desc: "Enhancing safety tracking for machine and vehicle operators in challenging, uncomfortable and isolated spaces.", 
        url: "assets/hotspot/media/operater-id+cabin-temp-roadheader-temp_2.mp4",
        thumbImg: "assets/hotspot/thumbnail/operater_id_cabin_temp_2_thumbnail.png"
      },
    ]
  },
  {
    label: "Equipment Inspection",
    icon: "assets/hotspot/icon/checkbox.png",
    ...percentToRatio(47, 71.5), // 818px/1920px = 42.60%, 683px/1084px = 63.01%
    isSpecial: false,
    medias: [
      { name: "Equipment Inspection",
        desc: "Streamline operations by integrating safety management and operational efficiency. Enable better decision-making, ensure compliance and boosts overall productivity and safety outcomes.", 
        url: "assets/hotspot/media/Equipment-Inspection.mp4",
        thumbImg: "assets/hotspot/thumbnail/equipment-inspection-thumbnail.png" },
      { name: "Tracking Equipment",
        desc: "Streamline operations by integrating safety management and operational efficiency. Enable better decision-making, ensure compliance and boosts overall productivity and safety outcomes.", 
        url: "assets/hotspot/2nd_media/Equipment-Inspection-2-tracking-equipment.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/Equipment-Inspection-2-tracking-equipment-thumbnail.png" }
    ]
  },
  {
    label: "Manrider Occupants ID",
    icon: "assets/hotspot/icon/engineer.png",
    ...percentToRatio(57, 67), // 980px/1920px = 51.04%, 617px/1084px = 56.91%
    isSpecial: false,
    medias: [
      { name: "Manrider-Occupants-ID",
        desc: "Real-time visibility and record keeping of personnel in isolated spaces.", 
        url: "assets/hotspot/media/Manrider-Occupants-ID.mp4",
        thumbImg: "assets/hotspot/thumbnail/manrider-occupants-thumbnail.png" }
    ]
  },
  {
    label: "Access Control",
    icon: "assets/hotspot/icon/iottag.png",
    ...percentToRatio(60, 11), // 1100px/1920px = 57.29%, 130px/1084px = 11.99%
    isSpecial: false,
    medias: [
      { name: "Access Control",
        desc: "Monitoring compliance, improving worker safety and ensuring adherence to site regulations in real time.", 
        url: "assets/hotspot/media/Access Control.mp4",
        thumbImg: "assets/hotspot/thumbnail/access-control-thumbnail.png" }
    ]
  },
  {
    label: "Tag + PPE Verification",
    icon: "assets/hotspot/icon/iottag.png",
    ...percentToRatio(71.72, 7.84), // 1185px/1920px = 61.72%, 85px/1084px = 7.84%
    isSpecial: false,
    medias: [
      { name: "Tag-PPE-Verification",
        desc: "Monitoring compliance, improving worker safety and ensuring adherence to site regulations in real time.", 
        url: "assets/hotspot/media/Tag-PPE-Verification.mp4",
        thumbImg: "assets/hotspot/thumbnail/tag-ppe-verifcation-thumbnail.png" },
      { name: "compliance-adherence-ppe",
        desc: "Monitoring compliance, improving worker safety and ensuring adherence to site regulations in real time.", 
        url: "assets/hotspot/2nd_media/Tag-PPE-Verification-2-compliance-adherence-ppe.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/Tag-PPE-Verification-2-compliance-adherence-ppe-thumbnail.png" }
    ]
  },
  {
    label: "Traffic Management",
    icon: "assets/hotspot/icon/iottag.png",
    ...percentToRatio(24, 44), // 830px/1920px = 43.23%, 305px/1084px = 28.14%
    isSpecial: true,
    medias: [
      { name: "Traffic-Control",
        desc: "Fully integrated to enhance safety and control, providing real-time guidance to workers and vehicles, helping prevent accidents and improve workflow efficiency.", 
        url: "assets/hotspot/media/Traffic-Control.mp4",
        thumbImg: "assets/hotspot/thumbnail/traffic-control-thumbnail.png" },
      { name: "Traffic Management",
        desc: "Fully integrated to enhance safety and control, providing real-time guidance to workers and vehicles, helping prevent accidents and improve workflow efficiency.", 
        url: "assets/hotspot/2nd_media/traffic-control-2-traffic-management.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/traffic-control-2-traffic-management-thumbnail.png" },
      { name: "Vehicle Tracking",
        desc: "Fully integrated to enhance safety and control, providing real-time guidance to workers and vehicles, helping prevent accidents and improve workflow efficiency.", 
        url: "assets/hotspot/2nd_media/traffic-control-3-vehicle-tracking.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/traffic-control-3-vehicle-tracking-thumbnail.png" }
    ]
  },
  {
    label: "Personnel Safety Tracking",
    icon: "assets/hotspot/icon/engineer.png",
    ...percentToRatio(68, 64.5), // 1216px/1920px = 63.33%, 586px/1084px = 54.06%
    isSpecial: false,
    medias: [
      { name: "Personal Safety Tracking",
        desc: "Enhancing worker safety by enabling escalation of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/media/Personal-Safety-Tracking.mp4",
        thumbImg: "assets/hotspot/thumbnail/personnel-safety-tracking-thumbnail.png" },
      { name: "Fatigue Management",
        desc: "Enhancing worker safety by enabling escalation of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/2nd_media/personnel-safety-tracking-2-fatigue-management.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/personnel-safety-tracking-2-fatigue-management-thumbnail.png" },
      { name: "Tracking Personnel",
        desc: "Enhancing worker safety by enabling escalation of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/2nd_media/personnel-safety-tracking-3-tracking-personnel.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/personnel-safety-tracking-3-tracking-personnel-thumbnail.png" },
      { name: "Indoor Map",
        desc: "Enhancing worker safety by enabling escalation of emergencies and providing immediate response to danger.", 
        url: "assets/hotspot/2nd_media/personnel-safety-tracking-4-indoor-map.mp4",
        thumbImg: "assets/hotspot/2nd_thumbnail/personnel-safety-tracking-4-indoor-map-thumbnail.png" }
    ]
  },
  {
    label: "Safety Inspections",
    icon: "assets/hotspot/icon/checkbox.png",
    ...percentToRatio(75.5, 58.5), // 1318px/1920px = 68.65%, 553px/1084px = 51.01%
    isSpecial: false,
    medias: [
      { name: "Safety Inspection",
        desc: "Streamline operations by integrating safety management and operational efficiency. Enable better decision-making, ensure compliance and boosts overall productivity and safety outcomes.", 
        url: "assets/hotspot/media/Safety-Inspection.mp4",
        thumbImg: "assets/hotspot/thumbnail/safety-inspection-thumbnail.png" }
    ]
  },
  {
    label: "Segment Erector Safe Zone",
    icon: "assets/hotspot/icon/engineer.png",
    ...percentToRatio(93.5, 6), // 1678px/1920px = 87.40%, 141px/1084px = 13.01%
    isSpecial: false,
    isDisabled: true,
    medias: [
    ]
  },
  {
    label: "Refuge Chamber",
    icon: "assets/hotspot/icon/engineer.png",
    ...percentToRatio(88, 51), // 1708px/1920px = 88.96%, 466px/1084px = 42.99%
    isSpecial: false,
    medias: [
      { name: "Refuge Chamber",
        desc: "Real-time visibility and record keeping of personnel in isolated spaces.", 
        url: "assets/hotspot/media/Refuge-Chamber.mp4",
        thumbImg: "assets/hotspot/thumbnail/refuge-chamber-thumbnail.png" }
    ]
  }
];

// ============= Helper: Convert Percentage to Ratio =============
function percentToRatio(percentX, percentY) {
  return {
    x: +(percentX / 100).toFixed(5),
    y: +(percentY / 100).toFixed(5),
  };
}
