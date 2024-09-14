
    
    import { decodeBase64 } from "jsr:@std/encoding@1";
    
      import chunk0 from "./aarch64-unknown-linux-gnu.base64.chunk_0.ts";
      
      import chunk1 from "./aarch64-unknown-linux-gnu.base64.chunk_1.ts";
      
    const chunks = [];
    
      chunks.push(chunk0);
      
      chunks.push(chunk1);
      
    const raw = decodeBase64(chunks.join(""));
    export default raw;
    