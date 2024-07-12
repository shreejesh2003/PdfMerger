const mergePdfs = async (pdf1, pdf2) => {
    const { default: PDFMerger } = await import('pdf-merger-js');
    const merger = new PDFMerger();
  
    await merger.add(pdf1);
    await merger.add(pdf2);
    
    const d = new Date().getTime();
    const outputPath = `./public/${d}.pdf`;
    
    await merger.save(outputPath);
    return d;
  };
  
  module.exports = { mergePdfs };
  