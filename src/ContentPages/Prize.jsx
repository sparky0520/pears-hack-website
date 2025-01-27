import React from 'react';

const Prize = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '1000px',
    padding: '24px',
    margin: '0 auto',
    marginTop: '-50px',
    position: 'relative',
    zIndex: 1,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  };

  const cardStyle = {
    backgroundColor: '#1A1A1A',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '275px',
    height: '254px',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '35px',
    fontWeight: '400',
    fontFamily: 'Bebas Neue, sans-serif',
    textAlign: 'center',
  };

  const cashAmountStyle = {
    color: 'white',
    fontSize: '70px',
    fontWeight: '400',
    fontFamily: 'Bebas Neue, sans-serif',
    textAlign: 'center',
    marginBottom: '-10px',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    marginTop: '30px',
  };

  const amazonVoucherStyle = {
    color: 'white',
    fontSize: '45px',
    fontWeight: '400',
    fontFamily: 'Bebas Neue, sans-serif',
    textAlign: 'center',
  };

  return (
    <div className="w-full">
      <style>
        {`
          @media (max-width: 768px) {
            .prize-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              padding: 4px !important;
              gap: 6px !important;
              height: 45vh !important;
              margin-top: 0 !important;
              align-items: start !important;
            }
            .prize-card {
              width: 100% !important;
              height: 100px !important;
              border-radius: 10px !important;
              padding: 4px !important;
            }
            .prize-title {
              font-size: 14px !important;
              margin: 0 !important;
              margin-top: -8px !important;
              line-height: 1 !important;
            }
            .prize-cash {
              font-size: 24px !important;
              margin-bottom: -8px !important;
              line-height: 1 !important;
            }
            .prize-voucher {
              font-size: 16px !important;
              line-height: 1 !important;
              margin: 0 !important;
              padding: 0 4px !important;
            }
            .prize-image {
              width: 32px !important;
              height: auto !important;
              margin-top: 8px !important;
            }
            .prize-tshirt {
              width: 35px !important;
              margin-top: 12px !important;
            }
            .prize-mug {
              width: 28px !important;
              margin-right: -4px !important;
              margin-top: 12px !important;
            }
            .prize-goodies {
              font-size: 12px !important;
              margin-top: -8px !important;
              line-height: 1 !important;
              padding: 0 2px !important;
            }
            .prize-jetbrains {
              width: 35px !important;
              height: 35px !important;
              margin-top: 8px !important;
            }
            .prize-image-container {
              height: 60% !important;
              margin-bottom: 2px !important;
            }
            .container-style {
              padding: 8px !important;
              margin-top: -30px !important;
              margin-left: -10px !important;
            }
          }

          @media (max-width: 380px) {
            .prize-grid {
              height: 40vh !important;
            }
            .prize-card {
              height: 90px !important;
            }
            .prize-title {
              font-size: 12px !important;
            }
            .prize-cash {
              font-size: 20px !important;
            }
            .prize-voucher {
              font-size: 14px !important;
            }
            .prize-goodies {
              font-size: 10px !important;
            }
            .prize-image {
              width: 28px !important;
            }
            .prize-tshirt {
              width: 30px !important;
            }
            .prize-mug {
              width: 24px !important;
            }
            .prize-jetbrains {
              width: 30px !important;
              height: 30px !important;
            }
          }
        `}
      </style>
      <div style={containerStyle} className="container-style"> 
        <div style={gridStyle} className="prize-grid"> 
          {/* AirPods Card */}
          <div style={cardStyle} className="prize-card">
            <div style={imageContainerStyle} className="prize-image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/1344/2923/d83e38304b902dd0efca3d687c8d80bc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9n-gCduchqPJdcoQHgj5NoJZUxtGM7-GSjCV9X4BQ3vYZ8wqDu9NeFgRM~rM6I7SdrkeaBU1igaRBHnw78nypxg311alffOTlQI1H-IMrf0XE2P8655FQOzav~PqbhySxHg8SyrVCB6PqPpdN1ZAqoKjKq3JnXBSr489O5SjVc~LcIxM8OaSmyp~MeLIA78YlLQ-LXGLxtuxias565PNmO5jFIubGrGLvlFkVjaUqfJ2MXrp5y13Df5XzhzbHw17DcbjLPG2aetOtPz3AxU81ks7W-8ZeGkGo72dgBp8SVMv5h3f-Ma5rjeAHF5PdE2MEXLWaP2MKz76WQx18DHSA__"
                alt="AirPods"
                style={imageStyle}
                className="prize-image"
              />
            </div>
            <h3 style={titleStyle} className="prize-title">AIRPODS</h3>
          </div>

          {/* Cash Prize Card */}
          <div style={cardStyle} className="prize-card">
            <h2 style={cashAmountStyle} className="prize-cash">1,00,000</h2>
            <p style={titleStyle} className="prize-title">CASH PRIZE</p>
          </div>

          {/* Samsung Tab Card */}
          <div style={cardStyle} className="prize-card">
            <div style={imageContainerStyle} className="prize-image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/d0bb/a0d1/4915b5f239c0f1bc045916dd9423f811?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q38v3ILfTBbdJABFTJ2o9yhN5oSGC-dKJGrZquiHxdXD9dXyw89qo6Enw6VTdSGTj1vpaJ6QBuFxJCICOY~xOQclDP-EEdcKzL46TlPZx4MeFdduiKG8HT9g0buOxakvgn2am9yr-jHFix-Gtl0EPr8QN0UeDVHY7IA-OVll3VHCDt4PzIFyKPPpZzVNW11i00XxohVBuD7xHZvnIAnl666s7goV4xkItqxWPq5XOtEIYflaAv0zyoN~OyBtBl8MIYF1hPGkBvc9IPqEmrRKDDwQh97SJxpwFo8cDE6B-FnKNEbtWYhMXD9fpH6mjETqHp69sEV64wnczYSTbA~~6w__"
                alt="Samsung Tab"
                style={imageStyle}
                className="prize-image"
              />
            </div>
            <h3 style={titleStyle} className="prize-title">SAMSUNG TAB</h3>
          </div>

          {/* JetBrains ID Card */}
          <div style={cardStyle} className="prize-card">
            <div style={imageContainerStyle} className="prize-image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/da4f/d3c1/809ca5dbda09b400cbaf223c93cb640d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXq1w7i3bP40tjVTjdrVRjeTbkLAsDqtyfU9AnSmOjzcFdolUmn0mC3LjHLdHW7KMdIrKeml6puONFBz-ue40t2AEc83lIDyji4plZInxA9Ss2ACTJgyzxtODTFihAkM71~bCmDsRCf4gS9-E2xAP7B8YviQ185AgNjuFfrDD-yOGrxndsdy-KICyJMu6iDlygSHeCucsA9bWPBzSTom7hs--fVrv6~to4xcblNNZegcnduMDzMbYOJRVz2nIn74KX71DTXwlXG2t6l4J3~fMlt8UT2O3brS-jpksAN0-A6LTdz5T1TOs7w2RmemtPjxt7YV3m2Y4duTyhxee53t7Q__"
                alt="JetBrains Logo"
                style={{ ...imageStyle, width: '100px', height: '100px' }}
                className="prize-jetbrains"
              />
            </div>
            <h3 style={titleStyle} className="prize-title">JETBRAINS ID</h3>
          </div>

          {/* Amazon Vouchers Card */}
          <div style={cardStyle} className="prize-card">
            <p style={amazonVoucherStyle} className="prize-voucher">Free amazon vouchers</p>
          </div>

          {/* Mug and T-Shirt Card */}
          <div style={cardStyle} className="prize-card">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "150px" }} className="prize-image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/3701/c7c8/f85dc498d6c9cdc3586f95025332433a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYPh0mTcq6LgaxuH2ehINTWkoedr9~59H0sHx7wAZibtGqpEEbyvLW~eTMk4mF8NQ82bcGdBuH2JtZdH7Vflnpwh1chG5LOOFpdCRy85E0hkqy1mJhdoVdYu0~fRH-KKcDZ95USfM35Mfnou-Sxs23x6KMK6CxxhsET-Cy~h~EXAl7G4udofo-yJoZjAweggqx61MMmvxNKouqLfaM4qisviG5Y5ia-DuWaTWSN55257w-mBIArz7NtiBkX-2bRergY4Qbp4u5A4xq4D7aG-cCf1J6By4DcACFtovEO9716-kY1Avczx89gS2-06zOPc4c5nSCenaEe91hf2ivwNJQ__"
                alt="Mug"
                style={{ width: "80px", height: "auto", marginRight: "-10px", marginTop: "40px" }}
                className="prize-mug"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/7f24/2aed/dbe84587a9ecad865979482b34a8057b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlUa8xs5TaNITeDzbJigNjtr3BxSrXHtMG6yB2fyvco0Zp4fxKq6A9rsYpLCgMG~Qw5jAm2-iw6w8AMNclCogLJcTYCiY-43dyFZ5f3-mg2O0L39cl1OOhMxvuCP10AO9yX3FpktaeAkC4eDDnupEUxtRYpsMXRsCErLqgI7xrWzXWjLSFuI9XIVmDhVdPVgN6uLXmVXDJLI0oBX~CYbzy01n2cU04zeeER0rk-6mV8VB7IKS73mafnrWOokXEy8l6XhSdionv8ntACjfx1CpNlrmECIiWB2JyGJn3YRm98JIj~TjxPv844Qm~JNE7BsgUSznNCkeNH18WD7O01tTA__"
                alt="T-Shirt"
                style={{ width: "100px", height: "auto", marginTop: "40px" }}
                className="prize-tshirt"
              />
            </div>
            <p style={{ ...titleStyle, fontSize: '28px' }} className="prize-goodies">FREE GOODIES AT YOUR DOORSTEP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;


// import React from 'react';

// const Prize = () => {
//   const styles = `
//     @keyframes marquee {
//       0% {
//         transform: translateY(0);
//       }
//       100% {
//         transform: translateY(-50%);
//       }
//     }

//     .prize-container {
//       width: 100%;
//       max-width: 1000px;
//       margin: 0 auto;
//       margin-top: 180px;
//       position: relative;
//       z-index: 1;
//       height: 600px;
//       overflow: hidden;
//     }

//     .marquee {
//       display: flex;
//       flex-direction: column;
//       animation: marquee 20s linear infinite;
//       padding-top: 24px;
//     }

//     .prize-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 16px;
//       justify-content: center;
//       align-items: center;
//     }

//     .prize-card {
//       background-color: #1A1A1A;
//       border-radius: 24px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: space-evenly;
//       width: 275px;
//       height: 254px;
//       box-sizing: border-box;
//     }

//     .prize-title {
//       color: white;
//       font-size: 35px;
//       font-weight: 400;
//       font-family: 'Bebas Neue', sans-serif;
//       text-align: center;
//     }

//     .cash-amount {
//       color: white;
//       font-size: 70px;
//       font-weight: 400;
//       font-family: 'Bebas Neue', sans-serif;
//       text-align: center;
//       margin-bottom: -10px;
//     }

//     .image-container {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 100%;
//       height: 80%;
//       overflow: hidden;
//     }

//     .prize-image {
//       max-width: 100%;
//       max-height: 100%;
//       object-fit: contain;
//       margin-top: 30px;
//     }

//     .jetbrains-image {
//       width: 100px;
//       height: 100px;
//     }

//     @media screen and (max-width: 768px) {
//       .prize-container {
//         height: 50vh;
//         margin-top: -15px;
//       }

//       .prize-grid {
//         grid-template-columns: repeat(2, 1fr);
//         gap: 8px;
//       }

//       .prize-card {
//         width: 160px;
//         height: 148px;
//       }

//       .prize-title {
//         font-size: 20px;
//       }

//       .cash-amount {
//         font-size: 40px;
//       }

//       .jetbrains-image {
//         width: 60px;
//         height: 60px;
//       }
//     }
//   `;

//   // Create the content grid
//   const content = (
//     <div className="prize-grid">
//       <div className="prize-card">
//         <div className="image-container">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/1344/2923/d83e38304b902dd0efca3d687c8d80bc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9n-gCduchqPJdcoQHgj5NoJZUxtGM7-GSjCV9X4BQ3vYZ8wqDu9NeFgRM~rM6I7SdrkeaBU1igaRBHnw78nypxg311alffOTlQI1H-IMrf0XE2P8655FQOzav~PqbhySxHg8SyrVCB6PqPpdN1ZAqoKjKq3JnXBSr489O5SjVc~LcIxM8OaSmyp~MeLIA78YlLQ-LXGLxtuxias565PNmO5jFIubGrGLvlFkVjaUqfJ2MXrp5y13Df5XzhzbHw17DcbjLPG2aetOtPz3AxU81ks7W-8ZeGkGo72dgBp8SVMv5h3f-Ma5rjeAHF5PdE2MEXLWaP2MKz76WQx18DHSA__"
//             alt="AirPods"
//             className="prize-image"
//           />
//         </div>
//         <h3 className="prize-title">AIRPODS</h3>
//       </div>

//       <div className="prize-card">
//         <h2 className="cash-amount">1,00,000</h2>
//         <p className="prize-title">CASH PRIZE</p>
//       </div>

//       <div className="prize-card">
//         <div className="image-container">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/d0bb/a0d1/4915b5f239c0f1bc045916dd9423f811?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q38v3ILfTBbdJABFTJ2o9yhN5oSGC-dKJGrZquiHxdXD9dXyw89qo6Enw6VTdSGTj1vpaJ6QBuFxJCICOY~xOQclDP-EEdcKzL46TlPZx4MeFdduiKG8HT9g0buOxakvgn2am9yr-jHFix-Gtl0EPr8QN0UeDVHY7IA-OVll3VHCDt4PzIFyKPPpZzVNW11i00XxohVBuD7xHZvnIAnl666s7goV4xkItqxWPq5XOtEIYflaAv0zyoN~OyBtBl8MIYF1hPGkBvc9IPqEmrRKDDwQh97SJxpwFo8cDE6B-FnKNEbtWYhMXD9fpH6mjETqHp69sEV64wnczYSTbA~~6w__"
//             alt="Samsung Tab"
//             className="prize-image"
//           />
//         </div>
//         <h3 className="prize-title">SAMSUNG TAB</h3>
//       </div>

//       <div className="prize-card">
//         <div className="image-container">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/da4f/d3c1/809ca5dbda09b400cbaf223c93cb640d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXq1w7i3bP40tjVTjdrVRjeTbkLAsDqtyfU9AnSmOjzcFdolUmn0mC3LjHLdHW7KMdIrKeml6puONFBz-ue40t2AEc83lIDyji4plZInxA9Ss2ACTJgyzxtODTFihAkM71~bCmDsRCf4gS9-E2xAP7B8YviQ185AgNjuFfrDD-yOGrxndsdy-KICyJMu6iDlygSHeCucsA9bWPBzSTom7hs--fVrv6~to4xcblNNZegcnduMDzMbYOJRVz2nIn74KX71DTXwlXG2t6l4J3~fMlt8UT2O3brS-jpksAN0-A6LTdz5T1TOs7w2RmemtPjxt7YV3m2Y4duTyhxee53t7Q__"
//             alt="JetBrains Logo"
//             className="jetbrains-image"
//           />
//         </div>
//         <h3 className="prize-title">JETBRAINS ID</h3>
//       </div>

//       <div className="prize-card">
//         <div className="image-container">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/3701/c7c8/f85dc498d6c9cdc3586f95025332433a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYPh0mTcq6LgaxuH2ehINTWkoedr9~59H0sHx7wAZibtGqpEEbyvLW~eTMk4mF8NQ82bcGdBuH2JtZdH7Vflnpwh1chG5LOOFpdCRy85E0hkqy1mJhdoVdYu0~fRH-KKcDZ95USfM35Mfnou-Sxs23x6KMK6CxxhsET-Cy~h~EXAl7G4udofo-yJoZjAweggqx61MMmvxNKouqLfaM4qisviG5Y5ia-DuWaTWSN55257w-mBIArz7NtiBkX-2bRergY4Qbp4u5A4xq4D7aG-cCf1J6By4DcACFtovEO9716-kY1Avczx89gS2-06zOPc4c5nSCenaEe91hf2ivwNJQ__"
//             alt="Goodies"
//             className="prize-image"
//           />
//         </div>
//         <h3 className="prize-title">GOODIES AT YOUR DOOR STEP</h3>
//       </div>

//       <div className="prize-card">
//         <h2 className="prize-title">FREE AMAZON VOUCHERS</h2>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <style>{styles}</style>
//       <div className="prize-container">
//         <div className="marquee">
//           {content}
//           <div style={{ marginTop: '24px' }}>
//             {content}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Prize;