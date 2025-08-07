import { useState } from "react";
import Layout from "../components/Layout";
import { X } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  career: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: "yoon",
    name: "윤 영 호",
    position: "대표이사 / 세무사",
    image: "https://cdn.builder.io/api/v1/image/assets%2Faefe9eccf09446e998a16c0318d70c3f%2Fae9bf94b741c4098b41114ee1e95224b?format=webp&width=800",
    career: [
      "국세청 32년 근무",
      "반포재산, 도봉법인, 북전주조사과장",
      "국세청 감사관실",
      "서울청 1국, 조사 3국",
      "역삼조사, 삼성법인, 강남재산",
      "금천·성��조사",
      "서울청 부과세과 팀장 등"
    ]
  },
  {
    id: "lee",
    name: "이 영 섭",
    position: "고 문",
    image: "https://cdn.builder.io/api/v1/image/assets%2Faefe9eccf09446e998a16c0318d70c3f%2F055b524f08ab4509b1e0f627cf76df15?format=webp&width=800",
    career: [
      "스닥상장사 대한뉴팜(주) 대표이사",
      "한국철도공사(코레일) 경영평가위원",
      "상명대학교 산업경영학과 초빙교수",
      "대한민국정부 헌정 사상 최초 민간 컨설팅 수행",
      "MBC 전략정보경영시스템 도입을 위한 진단",
      "삼성전자 가전본부 고문",
      "LG전자 가전본부 원가관리",
      "SK Chemical 지식경영시스템"
    ]
  },
  {
    id: "noh",
    name: "노 현 철",
    position: "이 사",
    image: "/placeholder.svg",
    career: [
      "국세청 15년 근무",
      "분당 법인 의정부 재산 등"
    ]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <Layout heroTitle="구성원">
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Faefe9eccf09446e998a16c0318d70c3f%2F4ce64c9a24414ec5aeb42f4477a65b1c?format=webp&width=800"
                      alt="로고"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm" style={{color: '#070D4C'}}>
                        {member.position}
                      </p>
                    </div>
                    
                    <div className="ml-auto">
                      <div className="w-20 h-20 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] flex">
              {/* Left side - Photo and contact info */}
              <div className="flex-shrink-0 w-64 p-6 border-r border-gray-200">
                <div className="w-48 h-64 bg-gray-300 rounded mb-6 mx-auto"></div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>jason@outlook.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+82 2 540 2153</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📠</span>
                    <span>+82 2 540 2154</span>
                  </div>
                </div>
              </div>

              {/* Right side - Info and career */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-gray-600">{selectedMember.position}</p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-4">경력사항</h3>
                  <div className="overflow-y-auto max-h-80 scrollbar-hide pr-2">
                    <div className="space-y-2">
                      {selectedMember.career.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
